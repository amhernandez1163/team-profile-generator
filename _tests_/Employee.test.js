const Employee = require("../lib/Employee");

test("test for constructor values from Employee to match contst Employee input below", () => {
  const myEmployee = new Employee(
    "San Holo",
    "11261990",
    "stayvibrant@gmail.com"
  );

  expect(employee.name).toBe("San Holo");
  expect(employee.id).toBe("11261990");
  expect(employee.email).toBe("stayvibrant@gmail.com");
});
