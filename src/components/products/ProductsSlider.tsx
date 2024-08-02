import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ProductT } from "../../lib/types";
import Product from "./ProductItem";

type ProductsSliderProps = {
  products: ProductT[];
};

export default function ProductsSlider({ products }: ProductsSliderProps) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      modules={[Navigation]}
      navigation={true}
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
      className="py-4"
    >
      {products?.map((product, index) => (
        <SwiperSlide key={index}>
          <Product product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
