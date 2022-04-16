const Employee = require("../lib/Employee");
const Employee = new Employee("San Holo", "11261990", "stayvibrant@gmail.com");

test("test for constructor values from Employee", () => {
  expect(employee.name).toBe("San Holo");
  expect(employee.id).toBe("11261990");
  expect(employee.email).toBe("stayvibrant@gmail.com");
});
