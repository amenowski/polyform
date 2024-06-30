import React, { ReactNode, useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    emote?: ReactNode;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div className="bg-essentialBackground2 py-16">
      <motion.div
        className="relative flex h-[45rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 text-center md:text-left"
        ref={ref}
      >
        <div className="div relative flex items-start px-4 md:px-16 lg:px-32">
          <div className="flex max-w-3xl flex-col justify-center">
            {content.map((item, index) => (
              <div
                key={item.title + index}
                className="relative my-[14rem] flex gap-4"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="absolute -top-[4.5rem] left-[122px] md:-left-20 md:-top-1"
                >
                  {item.emote}
                </motion.div>
                <div>
                  <motion.h2
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="text-3xl text-black lg:text-4xl"
                  >
                    {item.title}
                  </motion.h2>

                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="mt-4 text-lg text-zinc-500 md:max-w-sm"
                  >
                    {item.description}
                  </motion.p>
                </div>
              </div>
            ))}
            <div className="md:h-40" />
          </div>
        </div>
        <motion.div
          className={cn(
            "top-10 hidden h-[500px] w-[500px] bg-[#F7F7F8] md:sticky lg:block",
            contentClassName,
          )}
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </motion.div>
    </div>
  );
};
