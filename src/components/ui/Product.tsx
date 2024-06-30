import { Link } from "react-router-dom";
import { type Product } from "../../lib/types";
import { formatCurrency, formatNameForURL } from "../../utils/helpers";

type ProductProps = {
  product: Product;
};

export default function Product({ product }: ProductProps) {
  const { name, images, price } = product;

  return (
    <div className="group/product relative py-4">
      <Link to={`/product/${formatNameForURL(name)}`}>
        <img src={images[0]} alt={name} />
        <img
          src={images[1]}
          className="absolute left-0 top-0 hidden group-hover/product:block"
          alt={name}
        />
      </Link>
      <div className="py-2">
        <p className="mb-2">{name}</p>
        <p className="text-sm font-bold">{formatCurrency(price)}</p>
      </div>
    </div>
  );
}
