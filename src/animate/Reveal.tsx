import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  overflow?: "hidden" | "visible"; 
  delay?: number; 
  className?: string;
}

export const Reveal = ({ children, width = "fit-content", overflow = "hidden", delay = 0.2, className = "" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className = {className} style={{ position: "relative", width, overflow }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 }, 
          visible: { opacity: 1, y: 0 }, 
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay }} 
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};