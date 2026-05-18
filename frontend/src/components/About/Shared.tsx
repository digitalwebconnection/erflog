import { motion, useInView, useMotionValue, animate, type Variants } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Helper for character-by-character animation
export const SplitText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.03,
            ease: [0.2, 0.65, 0.3, 0.9] as any,
          }}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  const [display, setDisplay] = useState(0);
  const count = useMotionValue(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, numericValue, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1] as any, // Custom cubic-bezier for smoother feel
        onUpdate: (latest) => setDisplay(Math.floor(latest)),
      });
      return controls.stop;
    }
  }, [inView, numericValue, count]);

  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>;
};

export const FloatingShape = ({ className, delay = 0, duration = 6 }: { className: string; delay?: number; duration?: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0.1, 0.25, 0.1],
      y: [0, -40, 0],
      x: [0, 20, 0],
      rotate: [0, 45, 0],
      scale: [1, 1.1, 1]
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className={`absolute rounded-full blur-[80px] pointer-events-none ${className}`}
  />
);

// eslint-disable-next-line react-refresh/only-export-components
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// eslint-disable-next-line react-refresh/only-export-components
export const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};
