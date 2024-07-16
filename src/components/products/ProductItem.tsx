import { Link } from "react-router-dom";

import { ProductT } from "../../lib/types";
import { formatCurrency, formatNameForURL } from "../../utils/helpers";

export default function ProductItem({ product }: { product: ProductT }) {
  const { name, images, price } = product;

  return (
    <div className="group/product relative py-4">
      <Link to={`/product/${formatNameForURL(name)}`}>
        <img className="h-[17rem]" src={images[0]} alt={name} />
        <img
          src={images[1]}
          className="absolute left-0 top-0 hidden h-[17rem] group-hover/product:block"
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
