import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Container from "../components/layout/Container";
import ProductGallery from "../components/products/ProductGallery";
import Accordion from "../components/ui/Accordion";
import Button from "../components/ui/Button";
import Loading from "../components/ui/Loading";
import { useCartPreviewContext } from "../contexts/CartPreviewContext";
import { useProduct } from "../hooks/useProduct";
import { ProductT } from "../lib/types";
import { addToCart, getCurrentProductQuantity } from "../stores/cartSlice";
import {
  formatCurrency,
  revertFormattedName,
  scrollTop,
} from "../utils/helpers";

export default function ProductDetails() {
  const { name } = useParams();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const formattedName = revertFormattedName(name || "");
  const { product, isLoading } = useProduct(formattedName);

  const currentQuantity = useSelector(
    getCurrentProductQuantity(product?.at(0)?.id),
  );
  const { setIsCartPreviewOpen } = useCartPreviewContext();

  const isInCart = currentQuantity > 0;

  useEffect(() => {
    scrollTop();
  }, []);

  if (isLoading) return <Loading />;

  const {
    id,
    name: productName,
    price,
    images,
    description,
    isBest,
    category,
  } = product[0];

  const handleAddProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (Number(quantity) <= 0) return;

    const newProduct: ProductT = {
      id,
      name: productName,
      price,
      images,
      description,
      quantity: quantity,
      totalPrice: price * quantity,
      isBest,
      category,
    };

    setIsCartPreviewOpen(true);
    dispatch(addToCart(newProduct));
  };

  return (
    <Container>
      <div className="grid min-h-96 grid-cols-1 gap-8 py-8 sm:grid-cols-[1fr_0.6fr] lg:py-16">
        <div>
          <ProductGallery name={productName} images={images} />
        </div>
        <div className="flex flex-col gap-4 divide-y">
          <div>
            <h4 className="mb-4 text-3xl">
              {revertFormattedName(productName)}
            </h4>
            <p className="mb-12 text-xl text-gray-500">
              {formatCurrency(price)}
            </p>
            <div className="flex flex-col">
              <input
                className="mb-4 w-20 border p-2"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              {isInCart ? (
                <Button variant="secondary" to="/cart">
                  View in cart
                </Button>
              ) : (
                <Button variant="secondary" onClick={handleAddProduct}>
                  Add to cart
                </Button>
              )}
            </div>
          </div>
          <Accordion title="Description">
            <p className="text-sm">{description}</p>
          </Accordion>
        </div>
      </div>
    </Container>
  );
}
