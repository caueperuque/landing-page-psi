// FAQ.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQCardComponent, FAQLayoutComponent } from "./styles";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

export const FAQ = () => {
  const [open, setOpen] = useState(false);

  const contentVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? "10%" : "-10%",
      opacity: 0,
    }),
    visible: {
      x: "0%",
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-10%" : "10%",
      opacity: 0,
    }),
  };

  const direction = open ? 1 : -1;

  return (
    <FAQLayoutComponent>
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
              transition={{ type: "spring", stiffness: 100, duration: 100 }}
              style={{
                position: "absolute",
                top: "1.3rem",
                left: 0,
                width: "100%",
                height: "calc(100% - 2.6rem)", // ajusta para considerar padding vertical
                display: "flex",
                justifyContent: "center",
                gap: "1.3rem",
                flexDirection: "column",
                padding: "2rem",
                boxSizing: "border-box",
              }}
            >
              <ChatBubbleLeftRightIcon strokeWidth={0.5} />
              <h2>Como funcionam as sessões?</h2>
            </motion.div>
          ) : (
            <motion.div
              key="answer"
              custom={direction}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "spring", stiffness: 100, duration: 100 }}
              style={{
                position: "absolute",
                top: "1.3rem",
                left: 0,
                width: "100%",
                height: "calc(100% - 2.6rem)",
                display: "flex",
                alignItems: "center",
                padding: "2rem",
                boxSizing: "border-box",
              }}
            >
              <p>
                Sessões de psicoterapia de 15–30 minutos, com duração de 20
                minutos.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <button onClick={() => setOpen((o) => !o)}>{open ? "<" : ">"}</button>
      </FAQCardComponent>
    </FAQLayoutComponent>
  );
};
