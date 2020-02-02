const Engineer = require("../lib/Engineer");

test("should set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("John", 1, "tester@email.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("John", 1, "tester@email.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("should get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("John", 1, "tester@email.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});