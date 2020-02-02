const Employee = require("../lib/Employee");

test("should instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("should set name via constructor arguments", () => {
  const name = "Mike";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("should set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("John", testValue);
  expect(e.id).toBe(testValue);
});

test("should set email via constructor argument", () => {
  const testValue = "tester@email.comm";
  const e = new Employee("John", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("should get name via getName()", () => {
  const testValue = "Mike";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("should get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("John", testValue);
  expect(e.getId()).toBe(testValue);
});

test("should get email via getEmail()", () => {
  const testValue = "tester@email.com";
  const e = new Employee("John", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return Employee", () => {
  const testValue = "Employee";
  const e = new Employee("John", 1, "tester@email.com");
  expect(e.getRole()).toBe(testValue);
});
