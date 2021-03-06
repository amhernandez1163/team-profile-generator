const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("test for constructor values for Manager to match const input below", () => {
  const myManager = new Manager(
    "Johnnie",
    "1202",
    "johnnie@gmail.com",
    "2105555555"
  );

  expect(myManager.name).toBe("Johnnie");
  expect(myManager.id).toBe("1202");
  expect(myManager.email).toBe("johnnie@gmail.com");
  expect(myManager.officeNumber).toBe("2105555555");
});

test("test to verify if getOfficeNumber shows 2105555555", () => {
  const myManager = new Manager(
    "Johnnie",
    "1202",
    "johnnie@gmail.com",
    "2105555555"
  );

  expect(myManager.getOfficeNumber()).toBe("2105555555");
});

test("test to verify if getRole shows Manager", () => {
  const myManager = new Manager(
    "Johnnie",
    "1202",
    "johnnie@gmail.com",
    "2105555555"
  );

  expect(myManager.getRole()).toBe("Manager");
});
