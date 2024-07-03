import { Link } from "react-router-dom";
import {
  formatCurrency,
  formatNameForURL,
  revertFormattedName,
} from "../utils/helpers";
import RemoveProduct from "./ui/RemoveProduct";
import { Product } from "../lib/types";
import UpdateQuantity from "./ui/UpdateProductQuantity";

type CartPreviewProductProps = {
  product: Product;
};

function CartPreviewItem({ product }: CartPreviewProductProps) {
  const { images, price, name, quantity, id } = product;

  return (
    <li className="flex gap-4 py-4 text-gray-500">
      <Link to={`/product/${formatNameForURL(name)} `}>
        <img src={images[0]} alt={name} className="w-56" />
      </Link>
      <div className="flex w-full flex-col">
        <h5 className="mb-1 text-black">{revertFormattedName(name)}</h5>
        <p className="mb-14">Qty: {quantity}</p>
        <div className="flex items-center justify-between">
          <p className="justify-end">
            {formatCurrency(price)} x {quantity}
          </p>
          <RemoveProduct id={id} />
        </div>
      </div>
    </li>
  );
}

export default CartPreviewItem;
