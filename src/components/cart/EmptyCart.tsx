import { useUser } from "../../hooks/useUser";
import Button from "../ui/Button";

function EmptyCart() {
  const { isAuthenticated } = useUser();

  return (
    <div className="flex min-h-40 flex-col items-center justify-center gap-8 py-10 text-xl">
      <h3 className="text-4xl">Your cart is empty</h3>
      <div className="flex items-center gap-1">
        <Button to="/shop" variant="primary">
          Start shooping
        </Button>
        {isAuthenticated ? (
          ""
        ) : (
          <Button to="/login" variant="third">
            Log in
          </Button>
        )}
      </div>
    </div>
  );
}

export default EmptyCart;
