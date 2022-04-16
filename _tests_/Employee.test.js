const Employee = require("../lib/Employee");

test("test for constructor values from Employee to match contst Employee input below", () => {
  const myEmployee = new Employee(
    "San Holo",
    "11261990",
    "stayvibrant@gmail.com"
  );

  expect(Employee.name).toBe("San Holo");
  expect(Employee.id).toBe("11261990");
  expect(Employee.email).toBe("stayvibrant@gmail.com");
});
