const tiles = require("./img/tiles.png");

import { k } from "./components/kaboom";

import { Level } from "./components/level";
import { player } from "./components/player";

k.loadSprite("player", tiles, {
  sliceX: 20,
  sliceY: 20,
  anims: {
    idle: { from: 300, to: 300 },
    run: { from: 301, to: 302 },
    death: { from: 306, to: 306 },
  },
});

k.loadSprite("tiles", tiles, {
  sliceX: 20,
  sliceY: 20,
});

k.scene("game", () => {
  k.layers(["bg", "obj", "ui"], "obj");

  let scoreData = {
    value: 0,
    update() {
      console.log("A");
      scoreLabel.text = this.value;
    },
    get score() {
      return this.value;
    },
    set score(value) {
      this.value = value;
      this.update();
    },
  };

  const scoreLabel = k.add([
    k.text(scoreData.value.toString()),
    k.pos(10, 20),
    k.layer("ui"),
    {
      value: scoreData.value,
    },
  ]);

  Level();
  player(scoreData);
});

k.scene("lose", ({ score }) => {
  k.add([
    k.text(score.toString(), 32),
    k.origin("center"),
    k.pos(k.width() / 2, k.height() / 2),
  ]);
});

k.start("game");
