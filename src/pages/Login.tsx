import LoginForm from "../components/auth/LoginForm";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

export default function Login() {
  return (
    <Container className="grid min-h-[600px] gap-8 py-20 md:grid-cols-2 md:divide-x">
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
