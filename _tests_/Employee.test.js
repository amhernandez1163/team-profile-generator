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

test("test to verify if getName shows San Holo", () => {
  const myEmployee = new Employee(
    "San Holo",
    "11261990",
    "stayvibrant@gmail.com"
  );

  expect(myEmployee.getName()).toBe("San Holo");
});

test("test to verify if getId shows 11261990", () => {
  const myEmployee = new Employee(
    "San Holo",
    "11261990",
    "stayvibrant@gmail.com"
  );

  expect(myEmployee.getId()).toBe("11261990");
});

test("test to verify if getEmail shows stayvibrant@gmail.com", () => {
  const myEmployee = new Employee(
    "San Holo",
    "11261990",
    "stayvibrant@gmail.com"
  );

  expect(myEmployee.getEmail()).toBe("stayvibrant@gmail.com");
});

test("test to verify if getRole shows Employee", () => {
  const myEmployee = new Employee(
    "San Holo",
    "11261990",
    "stayvibrant@gmail.com"
  );

  expect(myEmployee.getRole()).toBe("Employee");
});
