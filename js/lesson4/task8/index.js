let and = 1000;
let sum = 0;
for (let i = 1; i <= and; i++) {
  sum += i;
}
let div = Math.trunc(sum / 1234);
let mods = sum % 1234;

console.log(div > mods ? true : false);
