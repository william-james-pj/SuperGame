import { k } from "./kaboom";

const MOVE_SPEED = 100;
const JUMP_FORCE = 250;
const FALL_DEATH = 400;
const SCALE = 1;

type PlayerProps = {
  value: number;
  score: number;
  update: () => void;
};

export function player(item: PlayerProps) {
  const player = k.add([
    k.sprite("player", {
      animSpeed: 0.1,
      frame: 300,
    }),
    k.pos(10, 80),
    k.solid(),
    k.body(),
    k.scale(SCALE),
  ]);

  player.collides("thorns", (t: any) => {
    player.play("death");
    k.go("lose", { score: item.score });
  });

  player.collides("coin", (c: any) => {
    k.destroy(c);
    item.score = item.score + 1;
  });

  player.action(() => {
    if (player.pos.y >= FALL_DEATH) k.go("lose", { score: item.score });
  });

  k.keyPress("left", () => {
    player.scale.x = -SCALE;
    player.play("run");
  });

  k.keyRelease("left", () => {
    player.play("idle");
  });

  k.keyDown("left", () => {
    player.move(-MOVE_SPEED, 0);
  });

  k.keyPress("right", () => {
    player.scale.x = +SCALE;
    player.play("run");
  });

  k.keyRelease("right", () => {
    player.play("idle");
  });

  k.keyDown("right", () => {
    player.move(MOVE_SPEED, 0);
  });

  k.keyPress("space", () => {
    if (player.grounded()) player.jump(JUMP_FORCE);
  });
}
