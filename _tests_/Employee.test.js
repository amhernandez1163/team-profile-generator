const Employee = require("../lib/Employee");

test("test for constructor values from Employee to match contst Employee input below", () => {
  const myEmployee = new Employee(
    "San Holo",
    "11261990",
    "stayvibrant@gmail.com"
  );

  expect(myEmployee.name).toBe("San Holo");
  expect(myEmployee.id).toBe("11261990");
  expect(myEmployee.email).toBe("stayvibrant@gmail.com");
});
