// components/AnimatedSection.tsx
"use client";
import { motion, MotionProps } from 'framer-motion';
import React, { ReactNode } from 'react';

interface AnimatedSectionProps extends MotionProps {
  children: ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  initial,
  animate,
  transition,
  ...motionProps // Utiliser les autres props de motion
}) => {
  return (
    <motion.section 
      initial={initial} 
      animate={animate} 
      transition={transition}
      {...motionProps} // Passer les autres propriétés motion
      className="my-16"
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
