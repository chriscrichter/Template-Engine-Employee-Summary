const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("should set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("John", 1, "tester@email.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("John", 1, "tester@email.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("should get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("John", 1, "tester@email.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});