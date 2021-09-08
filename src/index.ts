const tiles = require("./img/tiles.png");

import { k } from "./components/kaboom";

import { Level } from "./components/level";
import { player } from "./components/player";
// import { Score } from "./components/score";

k.loadSprite("player", tiles, {
  sliceX: 20,
  sliceY: 20,
  anims: {
    idle: { from: 300, to: 300 },
    run: { from: 301, to: 302 },
  },
});

k.loadSprite("tiles", tiles, {
  sliceX: 20,
  sliceY: 20,
});

k.scene("game", () => {
  k.layers(["bg", "obj", "ui"], "obj");

  Level();
  player();
});

k.start("game");
