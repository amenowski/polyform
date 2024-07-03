import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../stores/cartSlice";

type RemoveProductProps = {
  id: number;
};

function RemoveProduct({ id }: RemoveProductProps) {
  const dispach = useDispatch();

  function handleRemoveProduct(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    dispach(deleteFromCart(id));
  }

  return (
    <button
      onClick={handleRemoveProduct}
      className="border-none text-sm text-gray-500 underline outline-none"
    >
      Remove
    </button>
  );
}

export default RemoveProduct;
