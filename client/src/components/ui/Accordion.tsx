import { motion } from "framer-motion";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

type AccordionProps = {
  children: React.ReactNode;
  title?: string;
};

function Accordion({ children, title = "" }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="text-gray-500">
      <div className="flex items-center justify-between py-2">
        <h3 className="text-sm uppercase tracking-wider">{title}</h3>
        <motion.span
          onClick={handleClick}
          className="cursor-pointer"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <MdKeyboardArrowDown size={25} />
        </motion.span>
      </div>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "hidden grid-rows-[0fr] opacity-0"
        } `}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
