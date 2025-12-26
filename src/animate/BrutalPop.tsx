import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string; 
}

export const BrutalPop = ({ children, delay = 0, className = "" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.5 }, 
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.2,
          delay: delay,
          type: "spring",    
          stiffness: 300,     
          damping: 15      
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};