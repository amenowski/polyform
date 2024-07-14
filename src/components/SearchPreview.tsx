import { motion } from "framer-motion";
import { ChangeEvent, forwardRef, useState } from "react";
import { createPortal } from "react-dom";

import Searchbar from "../components/ui/Searchbar";
import Container from "./layout/Container";

const SearchPreview = forwardRef<HTMLDivElement>((props, ref) => {
  const [query, setQuery] = useState("");

  function handleOnChange(event: ChangeEvent<HTMLInputElement>): void {
    const text = event.target.value;
    console.log(query);
    setQuery(text);
  }

  return createPortal(
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ ease: "easeOut", duration: "0.3" }}
      className="absolute top-0 z-50 h-[20rem] w-full bg-white"
      ref={ref}
    >
      <Container>
        <Searchbar query={query} onChange={handleOnChange} />
      </Container>
    </motion.div>,
    document.body,
  );
});

export default SearchPreview;
