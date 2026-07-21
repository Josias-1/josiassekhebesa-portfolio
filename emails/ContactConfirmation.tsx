import {
  Button,
  Heading,
  Hr,
  Section,
  Text,
} from "@react-email/components";

import EmailLayout from "./EmailLayout";

interface Props {
  name: string;
}

export default function ContactConfirmation({
  name,
}: Props) {
  return (
    <EmailLayout preview="Thank you for getting in touch">

      <Heading
        style={{
          color: "#FFFFFF",
          fontSize: "32px",
        }}
      >
        Hi {name},
      </Heading>

      <Text
        style={{
          color: "#CBD5E1",
          lineHeight: 1.8,
        }}
      >
        Thank you for reaching out.
      </Text>

      <Text
        style={{
          color: "#CBD5E1",
          lineHeight: 1.8,
        }}
      >
        Your enquiry has been received successfully.
      </Text>

      <Text
        style={{
          color: "#CBD5E1",
          lineHeight: 1.8,
        }}
      >
        I personally review every message that comes
        through my website and I'll respond within
        one business day.
      </Text>

      <Hr
        style={{
          borderColor: "#334155",
          margin: "35px 0",
        }}
      />

      <Heading
        as="h3"
        style={{
          color: "#FFFFFF",
        }}
      >
        While you're here...
      </Heading>

      <Text style={{ color: "#CBD5E1" }}>
        • Enterprise AI Solutions
      </Text>

      <Text style={{ color: "#CBD5E1" }}>
        • Azure AI Architecture
      </Text>

      <Text style={{ color: "#CBD5E1" }}>
        • AI Engineering Playbooks
      </Text>

      <Text style={{ color: "#CBD5E1" }}>
        • Technical Case Studies
      </Text>

      <Section
        style={{
          marginTop: "40px",
          textAlign: "center",
        }}
      >
        <Button
          href="https://josiassekhebesa.com"
          style={{
            backgroundColor: "#38BDF8",
            color: "#FFFFFF",
            padding: "14px 28px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Visit My Portfolio
        </Button>
      </Section>

      <Text
        style={{
          color: "#CBD5E1",
          marginTop: "40px",
        }}
      >
        Thank you once again for taking the time to
        connect.
      </Text>

      <Text
        style={{
          color: "#FFFFFF",
          fontWeight: 600,
        }}
      >
        Best regards,
      </Text>

      <Text
        style={{
          color: "#38BDF8",
          fontSize: "20px",
          fontWeight: "700",
        }}
      >
        Josias Sekhebesa
      </Text>

    </EmailLayout>
  );
}