const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("test for constructor values for Intern to match const input below", () => {
  const myIntern = new Intern(
    "Deraven",
    "1005",
    "bestie@email.com",
    "Colorado"
  );

  expect(myIntern.name).toBe("Deraven");
  expect(myIntern.id).toBe("1005");
  expect(myIntern.email).toBe("bestie@email.com");
  expect(myIntern.school).toBe("Colorado");
});

test("test to verify if getSchool shows Colorado", () => {
  const myIntern = new Intern(
    "Deraven",
    "1005",
    "bestie@email.com",
    "Colorado"
  );

  expect(myIntern.getSchool()).toBe("Colorado");
});

test("test to verify if getRole shows Intern", () => {
  const myIntern = new Intern(
    "Deraven",
    "1005",
    "bestie@email.com",
    "Colorado"
  );

  expect(myIntern.getRole()).toBe("Intern");
});
