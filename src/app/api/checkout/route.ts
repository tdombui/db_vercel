import { NextResponse } from "next/server";
import { validateCartItems } from "use-shopping-cart/utilities";
import { inventory } from "../../../../config/inventory";
import { stripe } from "../../../../lib/stripe";

export async function POST(request: Request) {
  try {
    const cartDetails = await request.json();
    // Extract original product IDs and prepare cart details for validation
    interface CartItem {
      id: string;
      // Add other properties that each cart item might have
      quantity: number;
      price: number;
      // Include any variant information if necessary
      color?: string;
      size?: string;
    }

    interface ValidatedCartDetails {
      [key: string]: CartItem;
    }

    // Now use this interface in the reduce function
    const validatedCartDetails = Object.keys(cartDetails).reduce<ValidatedCartDetails>((acc, uniqueId) => {
      const item = cartDetails[uniqueId];
      const { id, color, size, ...rest } = item;
      if (inventory[id]) { // Ensure the product ID exists in inventory
        acc[id] = { ...rest, id, color, size }; // Use original product ID for validation
      }
      return acc;
    }, {});

    const lineItems = validateCartItems(inventory, cartDetails);
    const origin = request.headers.get("origin");
    const modifiedLineItems = lineItems.map((item) => ({
      ...item,
      description: "", // Set to an empty string to hide the description
    }));
    // Create the session
    const session = await stripe.checkout.sessions.create(
      {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        line_items: lineItems,
        shipping_address_collection: {
          allowed_countries: ["US"],
        },
        shipping_options: [
          {
            shipping_rate: "shr_1OWLjDJCALE6x3m31IvoiTcI",
          },
          {
            shipping_rate: "shr_1OXiG3JCALE6x3m3mL0wGRPN",
          },

        ],
        automatic_tax: {
          enabled: true,
        },
        billing_address_collection: "auto",
        success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/cart`,
      },
      {
        stripeAccount: process.env.STRIPE_ACCT // Add this line
      }
    );
    // const response = new NextResponse({
    //   body: JSON.stringify(session),
    //   status: 200,
    //   headers: {
    //     "Clear-Cart": "true",
    //   },
    // });
    return NextResponse.json(session);
  } catch (error) {
    console.error("Error processing checkout:", error);
    return NextResponse.json({
      error: { message: "Internal Server Error" },
      status: 500,
    });

  }
}
