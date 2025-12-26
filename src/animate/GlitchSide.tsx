import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  direction?: "left" | "right"; 
  delay?: number;
}

export const GlitchSlide = ({ children, direction = "left", delay = 0 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const startX = direction === "left" ? -100 : 100;

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ overflow: "hidden" }}> 
      <motion.div
        variants={{
          hidden: { opacity: 0, x: startX },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.6,
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};