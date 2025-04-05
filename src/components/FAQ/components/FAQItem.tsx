import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { FAQCardComponent } from "../styles";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

type FAQItemProps = {
  question: string;
  answer: string;
};

export const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [open, setOpen] = useState(false);
  const direction = open ? 1 : -1;

  const contentVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? "8%" : "-8%",
      opacity: 0,
    }),
    visible: {
      x: "0%",
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-8%" : "8%",
      opacity: 0,
    }),
  };

  return (
    <FAQCardComponent>
      <AnimatePresence initial={false} custom={direction} mode="wait">
        {!open ? (
          <motion.div
            key="question"
            custom={direction}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.25 }}
            className="faq-content"
          >
            <ChatBubbleLeftRightIcon strokeWidth={0.5} />
            <h2>{question}</h2>
          </motion.div>
        ) : (
          <motion.div
            key="answer"
            custom={direction}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.25 }}
            className="faq-content"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        animate={{ rotate: open ? 180 : 0 }}
        transition={{ duration: 0.25 }}
      >
        <ChevronLeftIcon />
      </motion.button>
    </FAQCardComponent>
  );
};
