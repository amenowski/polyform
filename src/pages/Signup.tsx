import SignupForm from "../components/auth/SignupForm";
import Container from "../components/layout/Container";

export default function Signup() {
  return (
    <Container className="min-h-[500px] max-w-[600px] py-20">
      <div>
        <h2 className="mb-8 text-6xl font-semibold">Create account</h2>
      </div>
      <SignupForm />
    </Container>
  );
}
