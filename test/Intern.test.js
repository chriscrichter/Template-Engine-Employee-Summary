// Template-Engine-Employee-Summary

const Intern = require("../lib/Intern");

test("should set school via constructor", () => {
  const testValue = "Columbia";
  const intrn = new Intern("John", 1, "tester@email.com", testValue);
  expect(intrn.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const intrn = new Intern("John", 1, "tester@email.com", "Columbia");
  expect(intrn.getRole()).toBe(testValue);
});

test("should get school via getSchool()", () => {
  const testValue = "Columbia";
  const intrn = new Intern("John", 1, "tester@email.com", testValue);
  expect(intrn.getSchool()).toBe(testValue);
});