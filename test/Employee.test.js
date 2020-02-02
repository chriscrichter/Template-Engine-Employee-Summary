// Template-Engine-Employee-Summary

const Employee = require("../lib/Employee");

test("should create Employee instance", () => {
  const emp = new Employee();
  expect(typeof(emp)).toBe("object");
});

test("should set name via constructor arguments", () => {
  const name = "Mike";
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

test("should set id via constructor argument", () => {
  const testValue = 100;
  const emp = new Employee("John", testValue);
  expect(emp.id).toBe(testValue);
});

test("should set email via constructor argument", () => {
  const testValue = "tester@email.comm";
  const emp = new Employee("John", 1, testValue);
  expect(emp.email).toBe(testValue);
});

test("should get name via getName()", () => {
  const testValue = "Mike";
  const emp = new Employee(testValue);
  expect(emp.getName()).toBe(testValue);
});

test("should get id via getId()", () => {
  const testValue = 100;
  const emp = new Employee("John", testValue);
  expect(emp.getId()).toBe(testValue);
});

test("should get email via getEmail()", () => {
  const testValue = "tester@email.com";
  const emp = new Employee("John", 1, testValue);
  expect(emp.getEmail()).toBe(testValue);
});

test("getRole() should return Employee", () => {
  const testValue = "Employee";
  const emp = new Employee("John", 1, "tester@email.com");
  expect(emp.getRole()).toBe(testValue);
});
