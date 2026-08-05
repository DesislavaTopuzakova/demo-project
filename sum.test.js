const { sum } = require("./demo");

test("сборът на 8 и 12 е 20", () => {
  expect(sum(8, 12)).toBe(20);
});

test("сборът на две отрицателни числа", () => {
  expect(sum(-3, -7)).toBe(-10);
});

test("сборът с нула не променя стойността", () => {
  expect(sum(5, 0)).toBe(5);
});
