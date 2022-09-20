const subtract = require("./subtraction");
test("subtract two numbers", () => {
  expect(subtract(50, 24)).toBe(26);
});
