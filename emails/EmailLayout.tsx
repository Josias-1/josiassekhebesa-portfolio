import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { ReactNode } from "react";

interface Props {
  preview: string;
  children: ReactNode;
}

export default function EmailLayout({
  preview,
  children,
}: Props) {
  return (
    <Html>
      <Head />

      <Preview>{preview}</Preview>

      <Body
        style={{
          backgroundColor: "#060B14",
          fontFamily:
            "Inter, Arial, Helvetica, sans-serif",
          padding: "40px 20px",
        }}
      >
        <Container
          style={{
            maxWidth: "650px",
            backgroundColor: "#0F172A",
            borderRadius: "16px",
            padding: "48px",
          }}
        >
        <Section
        style={{
            textAlign: "center",
            marginBottom: "40px",
        }}
        >
        <div
            style={{
            width: "72px",
            height: "72px",
            margin: "0 auto",
            borderRadius: "18px",
            background:
                "linear-gradient(135deg,#38BDF8,#0284C7)",
            color: "white",
            fontSize: "30px",
            fontWeight: "700",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            }}
        >
            JS
        </div>

        <Text
            style={{
            color: "#FFFFFF",
            fontSize: "28px",
            fontWeight: 700,
            marginBottom: 0,
            }}
        >
            Josias Sekhebesa
        </Text>

        <Text
            style={{
            color: "#38BDF8",
            fontWeight: 600,
            }}
        >
            Enterprise AI Engineer
        </Text>

        <Text
            style={{
            color: "#94A3B8",
            fontSize: "14px",
            }}
        >
            Azure AI • Generative AI • Agentic AI
        </Text>
        </Section>

          {children}

          <Section
            style={{
              marginTop: "50px",
              borderTop: "1px solid #334155",
              paddingTop: "24px",
            }}
          >
            <Text style={{ color: "#94A3B8" }}>
              Johannesburg, South Africa
            </Text>

            <Text style={{ color: "#94A3B8" }}>
              josiassekhebesa.com
            </Text>

            <Text style={{ color: "#94A3B8" }}>
              LinkedIn
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}