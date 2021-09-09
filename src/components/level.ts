import { k } from "./kaboom";

const levels = [
  "=======K R       W  w  |       W    w                ",
  "   w            rQ__w  |     5 W    w                ",
  "   w           W k=====K       W____w   R            ",
  "   qr        R W    w    R  rrrQ    qrr              ",
  "   ç w5  rr    W    w      Wp        & w             ",
  "     w  W  w   W    w 5    WP        : qrr           ",
  "     w  W  qrrrQ    qrrrrrrQ         V   çw R        ",
  "     qrrQ    pç       & & ç               w          ",
  "      P      P        : :                 w          ",
  "       c       c      : v                 qrrr       ",
  "    O           c     z              a               ",
  " a  13     o     c   xZX       c     ;               ",
  " ;o 46  12223      ! b~B      e      122             ",
  "222246  4   6   u  ;        123     O4               ",
  "  5 46__4 5 6On 1223   cE  o4 6   e1223              ",
  "    46===<  12224  6    E1224 122224 56              ",
  "    46  4|  45  4  6     45 4 4    4  6              ",
  "5   46  4|  4  o4 56eeeee4  4 45   4  6              ",
  " >==46  4|  4 1223  ltTtL  >=======4  6              ",
  " |  46  4|  4 4  6  i ^ I  |       4  >===<          ",
];

export function Level() {
  k.addLevel(levels, {
    width: 16,
    height: 16,
    "1": [k.sprite("tiles", { frame: 270 }), k.solid()],
    "2": [k.sprite("tiles", { frame: 271 }), k.solid()],
    "3": [k.sprite("tiles", { frame: 272 }), k.solid()],
    "4": [k.sprite("tiles", { frame: 290 }), k.solid()],
    "5": [k.sprite("tiles", { frame: 291 })],
    "6": [k.sprite("tiles", { frame: 292 }), k.solid()],

    q: [k.sprite("tiles", { frame: 315 }), k.solid()],
    r: [k.sprite("tiles", { frame: 316 }), k.solid()],
    Q: [k.sprite("tiles", { frame: 317 }), k.solid()],
    w: [k.sprite("tiles", { frame: 295 }), k.solid()],
    R: [k.sprite("tiles", { frame: 296 })],
    W: [k.sprite("tiles", { frame: 297 }), k.solid()],

    ">": [k.sprite("tiles", { frame: 227 })], //Canos
    "=": [k.sprite("tiles", { frame: 228 })],
    "<": [k.sprite("tiles", { frame: 229 })],
    "|": [k.sprite("tiles", { frame: 247 })],
    k: [k.sprite("tiles", { frame: 267 })],
    K: [k.sprite("tiles", { frame: 269 })],
    _: [k.sprite("tiles", { frame: 329 }), k.rotate(1.57)],

    p: [k.sprite("tiles", { frame: 19 })], //Plantas
    P: [k.sprite("tiles", { frame: 39 })],
    o: [k.sprite("tiles", { frame: 37 })],
    O: [k.sprite("tiles", { frame: 38 })],
    u: [k.sprite("tiles", { frame: 54 })],

    ç: [k.sprite("tiles", { frame: 166 })],

    l: [k.sprite("tiles", { frame: 180 }), k.solid()], //Andaimes
    t: [k.sprite("tiles", { frame: 181 }), k.solid()],
    T: [k.sprite("tiles", { frame: 201 }), k.solid()],
    L: [k.sprite("tiles", { frame: 182 }), k.solid()],
    i: [k.sprite("tiles", { frame: 220 })],
    I: [k.sprite("tiles", { frame: 222 })],
    "^": [k.sprite("tiles", { frame: 221 })],

    E: [k.sprite("tiles", { frame: 81 })], //Escada

    "!": [k.sprite("tiles", { frame: 185 })],
    a: [k.sprite("tiles", { frame: 186 })],
    ";": [k.sprite("tiles", { frame: 205 })],

    "&": [k.sprite("tiles", { frame: 3 })],
    ":": [k.sprite("tiles", { frame: 23 })],
    z: [k.sprite("tiles", { frame: 5 })],
    x: [k.sprite("tiles", { frame: 24 })],
    Z: [k.sprite("tiles", { frame: 25 })],
    X: [k.sprite("tiles", { frame: 26 })],
    b: [k.sprite("tiles", { frame: 44 }), k.solid()],
    "~": [k.sprite("tiles", { frame: 45 }), k.solid()],
    B: [k.sprite("tiles", { frame: 46 }), k.solid()],

    v: [k.sprite("tiles", { frame: 6 })],
    V: [k.sprite("tiles", { frame: 43 })],

    n: [k.sprite("tiles", { frame: 164 }), k.solid()],

    e: [k.sprite("tiles", { frame: 183 }), "thorns", k.solid()],

    c: [k.sprite("tiles", { frame: 1 }), "coin", k.solid()],

    any() {
      return [];
    },
  });
}
