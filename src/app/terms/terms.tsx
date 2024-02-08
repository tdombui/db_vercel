import React from "react";
import Link from "next/link";
import { Silkscreen } from "next/font/google";
import { Inter } from "next/font/google";

// Fonts
const silkScreen = Silkscreen({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Terms() {
  return (
    <main className="pt-6">
      {" "}
      {/* Adjust this padding to match your header's height plus any desired gap */}
      <div className="max-w-prose mx-auto px-4 lg:px-4 ">
        <div
          className="overflow-y-auto h-screen pb-2 custom-scrollbar"
          style={{ maxHeight: "calc(70vh - 6rem) " }}
        >
          {" "}
          {/* Adjust bottom padding and maxHeight to ensure it doesn't scroll behind the header */}
          <p className="text-emerald-50 pr-4" style={{ userSelect: "none" }}>
            This website (&quot;
            <a className="font-medium p-px hover:bg-rose-300 hover:text-emerald-50 hover:rounded-sm hover:blur-xs">
              dombui.com
            </a>
            &quot;) was built (and continues to be built) using AWS, Blender,
            Next.js, React, Tailwind, Three.js, Typescript, and Sanity, with
            payments powered by Stripe.
            <br />
            <br />
            If you have any feedback with this site, we&#39;re always looking to
            improve. Please share your feedback or report an issue here ={
              ">"
            }{" "}
            <Link
              href={`/contact`}
              className="font-medium p-px hover:bg-rose-300 hover:text-emerald-50 hover:rounded-sm hover:blur-xs"
            >
              /contact
            </Link>
            .
            <br /> <br />
            <b
              className={`${silkScreen.className} antialiased bg-blend-multiply text-3xl`}
            >
              TERMS{" "}
              <a
                className={`${inter.className} antialiased bg-blend-multiply text-3xl`}
              >
                &
              </a>{" "}
              CONDITIONS
            </b>
            <br />
            <i>Effective January 8, 2024</i> <br />
            <br />
            This website,{" "}
            <a className="font-medium p-px hover:bg-rose-300 hover:text-emerald-50 hover:rounded-sm hover:blur-xs">
              dombui.com
            </a>{" "}
            (&quot;Site&quot;), is owned and operated by Dominick Bui. (d/b/a
            dombui-insomnyc) (&quot;dombui&quot;, &quot;us&quot; or
            &quot;we&quot;). You should not access this Site or use our services
            until you have carefully read and agreed to these terms and
            conditions of use (the &quot;Terms&quot;) which govern your access
            to and use of this Site. These Terms apply to all Site visitors’
            access to and use of the Site.
            <br />
            <br />
            <b
              className={`${silkScreen.className} antialiased bg-blend-multiply text-3xl`}
            >
              USING THIS SITE
            </b>
            <br />
            Please use a standard-compliant web browser such as Chrome, Firefox,
            Safari using the most updated version of macOS, Windows (at least 10
            or 11), iOS, or Android.
            <br />
            <br />
            <b
              className={`${silkScreen.className} antialiased bg-blend-multiply text-3xl`}
            >
              TERMS OF USE
            </b>
            <br />
            By using our Site, you agree to the Terms of Use. We may change or
            update these terms so please check this page regularly. We do not
            represent or warrant that the information on our web site is
            accurate, complete, or current. This includes pricing and
            availability information. We reserve the right to correct any errors
            or omissions, and to change or update information at any time
            without prior notice.
            <br />
            <br />
            <b
              className={`${silkScreen.className} antialiased bg-blend-multiply text-3xl`}
            >
              {" "}
              COPYRIGHT{" "}
              <a
                className={`${inter.className} antialiased bg-blend-multiply text-3xl`}
              >
                &
              </a>{" "}
              TRADEMARKS
            </b>
            <br />
            All content of our website including text, graphics, logos, and
            images are property of Dominick Bui, unless otherwise stated.
            (dombui-DREAMBUILD/INSOMNYC) is protected by the United States and
            international copyright laws. You may electronically copy and print
            hard copies of pages from this web site solely for personal,
            non-commercial purposes related to placing an order or shopping with{" "}
            <a className="font-medium p-px hover:bg-rose-300 hover:text-emerald-50 hover:rounded-sm hover:blur-xs">
              dombui.com
            </a>
            . Any other use of our Site, content, images or information
            contained therein, including reproduction and internet links, is
            strictly prohibited without our prior written permission.
            <br />
            <br />
            <b
              className={`${silkScreen.className} antialiased bg-blend-multiply text-3xl`}
            >
              PURCHASE FOR PERSONAL USE ONLY
            </b>
            <br />
            You may purchase products only for personal use and not for resale.
            By placing your order, you certify that you are purchasing products
            for personal use only and not for resale. We reserve the right to
            refuse orders for any reason without explanation.
            <br />
            <br />
            <b
              className={`${silkScreen.className} antialiased bg-blend-multiply text-3xl`}
            >
              UNLAWFUL OR PROHIBITED USES
            </b>
            <br />
            As a condition of your access to and use of this Site, you may not
            use the Site for any purpose that is unlawful or prohibited by these
            Terms. You may not disrupt, disable, overburden, or impair any
            function of the Site; attempt to gain unauthorized access to any
            portion of the Site; use data mining, robots, spiders, scraping or
            similar automated or manual methods; or circumvent or modify any
            feature of the Site.
            <br />
            <br />
            <b
              className={`${silkScreen.className} antialiased bg-blend-multiply text-3xl`}
            >
              CANCELLATION POLICY
            </b>
            <br />
            We do not allow cancellations once the order has been placed. All
            orders are final and cannot be changed after submission. We do our
            best to ship all packages within 14 days. In the event that you
            order has not shipped within 14 days, you may reach out to customer
            service to request a cancellation.
            <br />
            <br />
            <b
              className={`${silkScreen.className} antialiased bg-blend-multiply text-3xl`}
            >
              RETURN POLICY
            </b>
            <br />
            We will gladly exchange an item for online store credit only. Before
            sending the item back, please fill out the return form found in your
            order shipment confirmation within 2 days of receipt of your
            shipment. Packages sent without first contacting us will not be
            accepted. Items to be exchanged must be returned in perfect, new
            condition with all original tags attached. dombui must receive the
            returned item within 7 days of return authorization.
            <br />
            <br />
            For any returned items, you will not be refunded the original cost
            of shipping, and you are responsible for the cost of the return
            shipping. We do not assume responsibility for reimbursement or
            compensation of returned packages lost in transit without proof of
            delivery to dombui.
            <br />
            <br />
            <b
              className={`${silkScreen.className} antialiased bg-blend-multiply text-3xl`}
            >
              {" "}
              PAYMENT
            </b>
            <br />
            <a className="font-medium p-px hover:bg-rose-300 hover:text-emerald-50 hover:rounded-sm hover:blur-xs">
              dombui.com
            </a>{" "}
            uses secure processing called SSL Encryption Technology (using
            Stripe Payments), which is the industry standard. SSL(Secure Sockets
            Layer) is a protocol developed for the transmission of private
            information over the internet. SSL uses a private key to encrypt
            your data, including your credit card information, so that it cannot
            be read while being transferred over the internet. With Stripe, you
            can shop this Site with total peace-of-mind.
            <br />
            <br />
            <b
              className={`${silkScreen.className} antialiased bg-blend-multiply text-3xl`}
            >
              SHIPPING
            </b>
            <br />
            At this time, we are only accepting orders from residents that live
            in the U.S.A., Canada, and Mexico.
            <br />
            <br />
            All orders are shipped via carriers selected by dombui. Please note
            that UPS does not deliver to APO/FPO addresses or P.O. boxes.
            <br />
            <br />
            The shipping rate to the contiguous 48 U.S. states is $10. The
            shipping rate to Alaska, Hawaii and Puerto Rico is $25. Orders for
            Canada are charged a flat rate $25 fee for UPS expedited shipping
            and a Canadian surcharge for estimated duty, fee and processing
            expenses. Canadian customers will not incur any additional charges
            upon delivery. Orders for Mexico are charged a flat rate $35 fee for
            UPS expedited shipping and a Mexican Surcharge to cover VAT and
            Duty. Mexican customers will not incur any additional charges upon
            delivery.
            <br />
            <br />
            Please allow 3-5 business days for order processing and
            verification, and an additional 7-10 business days for delivery. A
            tracking number will be provided by email once the order has been
            shipped. We are not responsible for any lost, stolen, or damaged
            shipments. All shipments are insured and the buyer assumes all
            responsibilities of claims made with the shipping carrier.
          </p>
        </div>
      </div>
    </main>
  );
}
