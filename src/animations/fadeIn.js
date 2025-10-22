export const fadeIn = (direction, delay) => ({
  hidden: { opacity: 0, y: direction === "up" ? 40 : -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease: "easeOut" },
  },
});
