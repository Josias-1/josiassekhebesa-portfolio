import {
  Heading,
  Hr,
  Link,
  Section,
  Text,
} from "@react-email/components";

import EmailLayout from "./EmailLayout";

interface Props {
  name: string;
  email: string;
  company?: string;
  project?: string;
  message: string;
}

export default function ContactNotification({
  name,
  email,
  company,
  project,
  message,
}: Props) {
  return (
    <EmailLayout preview={`New enquiry from ${name}`}>

      <Heading
        style={{
          color: "#FFFFFF",
          fontSize: "30px",
          marginBottom: "12px",
        }}
      >
         New Portfolio Enquiry
      </Heading>

      <Text style={{ color: "#94A3B8" }}>
        Someone has submitted the contact form on your portfolio.
      </Text>

      <Hr style={{ borderColor: "#334155", margin: "35px 0" }} />

      <Section>

        <Text>
          <strong style={{ color: "#38BDF8" }}>
            👤 Name
          </strong>
          <br />
          {name}
        </Text>

        <Text>
          <strong style={{ color: "#38BDF8" }}>
             Email
          </strong>
          <br />
          <Link href={`mailto:${email}`}>
            {email}
          </Link>
        </Text>

        <Text>
          <strong style={{ color: "#38BDF8" }}>
             Company
          </strong>
          <br />
          {company || "Not provided"}
        </Text>

        <Text>
          <strong style={{ color: "#38BDF8" }}>
             Project
          </strong>
          <br />
          {project || "Not specified"}
        </Text>

      </Section>

      <Hr style={{ borderColor: "#334155", margin: "35px 0" }} />

      <Heading
        as="h3"
        style={{
          color: "#FFFFFF",
        }}
      >
         Message
      </Heading>

      <Section
        style={{
          background: "#0B1220",
          padding: "24px",
          borderRadius: "12px",
        }}
      >
        <Text
          style={{
            color: "#E2E8F0",
            lineHeight: 1.8,
            whiteSpace: "pre-wrap",
          }}
        >
          {message}
        </Text>
      </Section>

    </EmailLayout>
  );
}