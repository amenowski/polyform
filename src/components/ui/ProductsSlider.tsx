import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { type Product as ProductT } from "../../lib/types";
import Product from "./Product";
import ProductSkeleton from "./ProductSkeleton";

type ProductsSliderProps = {
  products: ProductT[];
  isLoading: boolean;
};

export default function ProductsSlider({
  products,
  isLoading,
}: ProductsSliderProps) {
  if (isLoading) return <ProductSkeleton />;

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      modules={[Navigation]}
      breakpoints={{
        499: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {products?.map((product, index) => (
        <SwiperSlide key={index}>
          <Product product={product} isLoading={isLoading} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
