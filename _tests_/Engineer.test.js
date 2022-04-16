const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("test for constructor values for Engineer to match contst input below", () => {
  const myEngineer = new Engineer(
    "Jose",
    "1102",
    "jose@bff.com",
    "amhernandez1163"
  );

  expect(myEngineer.name).toBe("Jose");
  expect(myEngineer.id).toBe("1102");
  expect(myEngineer.email).toBe("jose@bff.com");
  expect(myEngineer.github).toBe("amhernandez1163");
});
