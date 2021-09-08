import kaboom from "kaboom";

const k = kaboom({
  global: true,
  fullscreen: true,
  scale: 2.5,
  debug: true,
  clearColor: [0, 0, 0, 0.9],
});

export { k };
