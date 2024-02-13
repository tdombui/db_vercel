// Import necessary modules and inventory
import { NextResponse } from "next/server";
import { validateCartItems } from "use-shopping-cart/utilities";
import { inventory as rawInventory } from "../../../../config/inventory";
import { stripe } from "../../../../lib/stripe";

interface ProductDetails {
  name: string;
  price: number;
  currency: string;
}

interface Inventory {
  [productId: string]: ProductDetails;
}

const inventory: Inventory = rawInventory.reduce((acc: Inventory, product) => {
  acc[product.id] = {
    name: product.name,
    price: product.price,
    currency: product.currency
  };
  return acc;
}, {});

export async function POST(request: Request) {
  try {
    // Parse the cart details from the request body
    const cartDetails = await request.json();

    // Prepare cart details for Stripe checkout
    const stripeLineItems = Object.keys(cartDetails).map((uniqueId) => {
      // Extract the original product ID from the uniqueId
      const [productId] = uniqueId.split('-');
      const item = cartDetails[uniqueId];

      // Find the item in the inventory to get its price (assuming price is in cents)
      const inventoryItem = inventory[productId];
      if (!inventoryItem) {
        throw new Error(`Product with ID ${productId} not found in inventory.`);
      }

      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: inventoryItem.name, // You can append variant info here if needed
            // Example: `${inventoryItem.name} - Color: ${item.color}, Size: ${item.size}`
          },
          unit_amount: inventoryItem.price, // Use price from inventory
        },
        quantity: item.quantity,
        // Optionally, add metadata for color and size if needed for order fulfillment
        metadata: {
          color: item.color,
          size: item.size,
        },
      };
    });

    // Specify the origin for success and cancel URLs
    const origin = request.headers.get("origin");

    // Create the Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      line_items: stripeLineItems,
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
    });

    // Return the session details as the response
    return NextResponse.json(session);
  } catch (error) {
    console.error("Error processing checkout:", error);
    return NextResponse.json({
      error: { message: "Internal Server Error" },
      status: 500,
    });
  }
}
