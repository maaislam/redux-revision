export const menuToggleVariant = {
  in: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
      when: 'beforeChildren',
      staggerChildren: 0.07,
    },
  },
  out: {
    x: '1000px',
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.55, 0.085, 0.68, 0.53],
      when: 'afterChildren',
      staggerChildren: 0.02,
    },
  },
};

export const menuItemVariant = {
  in: {
    y: 0,
    opacity: 1,

    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  out: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const PageAnimation = {
  in: {
    transform: 'scale(1)',
    filter: 'blur(0px)',
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.47, 0, 0.745, 0.715],
    },
  },
  out: {
    transform: 'scale(1.2)',
    filter: 'blur(4px)',
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.47, 0, 0.745, 0.715],
    },
  },
};
export const PageAnimation2 = {
  in: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.47, 0, 0.745, 0.715],
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.47, 0, 0.745, 0.715],
    },
  },
};
export const PageAnimation3 = {
  in: {
    opacity: 1,

    transition: {
      delay: 0.2,
      duration: 0.3,
      ease: [0.47, 0, 0.745, 0.715],
    },
  },
  out: {
    opacity: 0,

    transition: {
      delay: 0.2,
      duration: 0.3,
      ease: [0.47, 0, 0.745, 0.715],
    },
  },
};
