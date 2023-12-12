export const WrapperSettings = {
  open: {
    x: "-50%",
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  closed: {
    x: "-50%",
    y: "100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-50%",
    y: "100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const WrapperVariants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
