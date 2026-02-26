"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimateInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  duration?: number;
}

const directionMap = {
  up: { hidden: { y: 30 }, visible: { y: 0 } },
  left: { hidden: { x: -30 }, visible: { x: 0 } },
  right: { hidden: { x: 30 }, visible: { x: 0 } },
  none: { hidden: {}, visible: {} },
};

export default function AnimateInView({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
}: AnimateInViewProps) {
  const movement = directionMap[direction];

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...movement.hidden }}
      whileInView={{ opacity: 1, ...movement.visible }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
