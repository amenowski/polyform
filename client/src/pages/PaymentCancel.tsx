import Button from "../components/ui/Button";

export default function PaymentCancel() {
  return (
    <div className="flex min-h-[30rem] w-full flex-col items-center justify-center gap-4">
      <h1 className="text-6xl">Payment canceled</h1>
      <Button to="/home" variant="primary">
        Back Home
      </Button>
    </div>
  );
}
