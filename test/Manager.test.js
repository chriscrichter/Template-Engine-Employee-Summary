// Template-Engine-Employee-Summary

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("should set office number via constructor argument", () => {
  const testValue = 100;
  const man = new Manager("John", 1, "tester@email.com", testValue);
  expect(man.officeNumber).toBe(testValue);
});

test("getRole() should return Manager", () => {
  const testValue = "Manager";
  const man = new Manager("John", 1, "tester@email.com", 100);
  expect(man.getRole()).toBe(testValue);
});

test("should get office number via getOffice()", () => {
  const testValue = 100;
  const man = new Manager("John", 1, "tester@email.com", testValue);
  expect(man.getOfficeNumber()).toBe(testValue);
});