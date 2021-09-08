import { k } from "./kaboom";

export function Score() {
  const scoreLabel = k.add([
    k.text("score"),
    k.pos(30, 6),
    k.layer("ui"),
    {
      value: "score",
    },
  ]);
}
