import { MotionProps, motion } from "framer-motion";
import React, { FC, PropsWithChildren } from "react";

const Motion: FC<PropsWithChildren<MotionProps>> = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>;
};

export default Motion;
