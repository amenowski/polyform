import { HTMLMotionProps, motion } from "framer-motion";
import { ChangeEvent, forwardRef, useState } from "react";
import { createPortal } from "react-dom";

import { useSearchProducts } from "../../hooks/useSearchProducts";
import Container from "../layout/Container";
import Searchbar from "../ui/Searchbar";
import SearchProducts from "./SearchProducts";

const SearchPreview = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  (props, ref) => {
    const [query, setQuery] = useState("");
    const { searchProducts, isLoading } = useSearchProducts(query);

    function handleOnChange(event: ChangeEvent<HTMLInputElement>): void {
      const text = event.target.value;
      setQuery(text);
    }

    return createPortal(
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ ease: "easeOut", duration: 0.3 }}
        className="absolute top-0 z-[60] h-[10rem] w-full bg-white"
        ref={ref}
        {...props}
      >
        <Container>
          <Searchbar query={query} onChange={handleOnChange} />
          <SearchProducts
            searchProducts={searchProducts}
            isLoading={isLoading}
          />
        </Container>
      </motion.div>,
      document.body,
    );
  },
);

export default SearchPreview;
