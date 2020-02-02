// Template-Engine-Employee-Summary

const Engineer = require("../lib/Engineer");

test("should set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const eng = new Engineer("John", 1, "tester@email.com", testValue);
  expect(eng.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const eng = new Engineer("John", 1, "tester@email.com", "GitHubUser");
  expect(eng.getRole()).toBe(testValue);
});

test("should get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const eng = new Engineer("John", 1, "tester@email.com", testValue);
  expect(eng.getGithub()).toBe(testValue);
});