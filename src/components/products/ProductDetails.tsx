import { ProductT } from "../../lib/types";
import { formatCurrency, revertFormattedName } from "../../utils/helpers";
import Accordion from "../ui/Accordion";
import AddToCart from "./AddToCart";
import ProductGallery from "./ProductGallery";

type ProductDetailsProps = {
  product: ProductT;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { name, price, images, description } = product;

  return (
    <div className="grid min-h-[40rem] grid-cols-1 gap-8 py-8 sm:grid-cols-[1fr_0.6fr] lg:py-12">
      <div>
        <ProductGallery name={name} images={images} />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h4 className="mb-4 text-3xl">{revertFormattedName(name)}</h4>
          <p className="mb-12 text-xl text-gray-500">{formatCurrency(price)}</p>
        </div>
        <AddToCart product={product} />
        <Accordion title="Description">
          <p className="text-sm">{description}</p>
        </Accordion>
      </div>
    </div>
  );
}
