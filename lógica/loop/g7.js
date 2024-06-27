const prompt = require("prompt-sync")();

for (i = 1; i <= H; i++) {
  let e = " ".repeat(H - i);
  let a = "*".repeat(i * 2 - 1);
  console.log(e + a);
}
