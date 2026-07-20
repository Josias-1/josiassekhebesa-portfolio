import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <Container>
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Josias Sekhebesa
        </p>
      </Container>
    </footer>
  );
}