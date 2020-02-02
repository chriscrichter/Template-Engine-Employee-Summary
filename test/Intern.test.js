const Intern = require("../lib/Intern");

test("should set school via constructor", () => {
  const testValue = "Columbia";
  const e = new Intern("John", 1, "tester@email.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("John", 1, "tester@email.com", "Columbia");
  expect(e.getRole()).toBe(testValue);
});

test("should get school via getSchool()", () => {
  const testValue = "Columbia";
  const e = new Intern("John", 1, "tester@email.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});