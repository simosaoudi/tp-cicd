

const { addition, soustraction } = require("./index");

test("2 + 3 = 5", () => {
  expect(addition(2, 3)).toBe(5);
});

test("5 - 3 = 2", () => {
  expect(soustraction(5, 3)).toBe(2);
});