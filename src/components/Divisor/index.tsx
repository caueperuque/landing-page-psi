import { motion } from "framer-motion";
import { scaleX } from "../../utils/animations";
import { DivisorContainer, DivisorElement } from "./styles";

export const Divisor = () => {
  return (
    <DivisorContainer>
      <motion.div
        variants={scaleX}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        style={{ width: "95%", originX: 0.5 }}
      >
        <DivisorElement />
      </motion.div>
    </DivisorContainer>
  );
};
