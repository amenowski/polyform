import SignupForm from "../components/SignupForm";
import Container from "../components/ui/Container";

export default function Signup() {
  return (
    <Container className="min-h-[500px] max-w-[600px] divide-x py-20">
      <SignupForm />
    </Container>
  );
}
