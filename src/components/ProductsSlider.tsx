import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ProductT } from "../lib/types";
import Product from "./ui/Product";
import ProductSkeleton from "./ui/ProductSkeleton";

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
          <Product product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
