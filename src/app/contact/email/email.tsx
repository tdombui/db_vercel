import React from "react";
import {
  Html,
  Body,
  Head,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  senderName: string;
  contactType: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  senderName,
  contactType,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from dombui.com contact form</Preview>
      <Tailwind>
        <Body className="bg-gray-200 border-black my-10 px-10 py-4 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              {/* <Text>Contact type: {contactType}</Text>
              <Text>From: {senderName}</Text> */}
              <Text>
                <b>Email</b>: {senderEmail}
              </Text>
              <Text>
                <b>Name</b>: {senderName}
              </Text>
              <Text>
                <b>What</b>: {contactType}
              </Text>
              <Hr />
              <Text className="leading-tight">
                <b>Message</b>:
              </Text>
              <br />
              <Text>{message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
