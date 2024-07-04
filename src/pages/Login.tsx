import LoginForm from "../components/LoginForm";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

export default function Login() {
  return (
    <Container className="grid min-h-[600px] divide-x py-20 md:grid-cols-2">
      <div className="px-16">
        <h2 className="mb-8 text-3xl font-semibold">Login</h2>
        <LoginForm />
      </div>
      <div className="px-16">
        <h2 className="mb-8 text-3xl font-semibold">New customer</h2>
        <p className="mb-8">
          Create your personalized Polyform account! You can track your orders
          and edit billing/shipping info.
        </p>
        <Button to="/signup" variant="secondary">
          Create account
        </Button>
      </div>
    </Container>
  );
}
