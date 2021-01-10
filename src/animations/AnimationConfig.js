export const menuToggleVariant = {
  in: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.25, 0.46, 0.45, 0.94],
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  out: {
    x: '1000px',
    opacity: 0,
    transition: {
      ease: [0.55, 0.085, 0.68, 0.53],
      when: 'afterChildren',
      staggerChildren: 0.1,
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
