// packages required for application
const inquirer = require("inquirer");
const fs = require("fs");
const { Employee, Engineer, Intern, Manager } = require("./lib/index");
const generateContent = require("./src/generateContent");
const team = [];

function managerArr() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your Team Manager's name?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "Enter your Employee ID number:",
      },
      {
        type: "input",
        name: "employeeEmail",
        message: "Enter your primary email address:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter your office phone number:",
      },
    ])
    .then((data) => {
      console.log(data);
      const newManager = new Manager(
        data.managerName,
        data.employeeId,
        data.employeeEmail,
        data.officeNumber
      );
      team.push(newManager);
      promptMenu();
    });
}

function promptMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menuOptions",
        message: "How would you like to proceed?",
        choices: ["Add an Engineer", "Add an Intern", "Build my team"],
      },
    ])
    .then((data) => {
      switch (data.menuOptions) {
        case "Add an Engineer":
          EngineerArr();
          break;
        case "Add an Intern":
          InternArr();
          break;
        default
        buildTeam();
      }
    });
}

function EngineerArr() {
  console.log(`
    ************************
      Now Adding: Engineer
    ************************`);
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Enter your Engineer's name:",
      },
      {
        type: "input",
        name: "engineerId",
        message: "Enter your Engineer's ID number:",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Enter your Engineer's primary email address:",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Enter your Engineer's GitHub username:",
      },
    ])
    .then((data) => {
      console.log(data);
      const newEngineer = new Engineer(
        data.engineerName,
        data.engineerId,
        data.engineerEmail,
        data.engineerGithub
      );
      team.push(newEngineer);
      promptMenu();
    });
}

function InternArr() {
  console.log(`
    ************************
      Now Adding: Intern
    ************************`);
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "Enter your Intern's name:",
      },
      {
        type: "input",
        name: "internId",
        message: "Enter your Intern's ID number:",
      },
      {
        type: "input",
        name: "internEmail",
        message: "Enter your Intern's primary email address:",
      },
      {
        type: "input",
        name: "internSchool",
        message: "Enter your Intern's School:",
      },
    ])
    .then((data) => {
      console.log(data);
      const newIntern = new Intern(
        data.internName,
        data.internId,
        data.internEmail,
        data.internSchool
      );
      team.push(newIntern);
      promptMenu();
    });
}

function buildTeam(data) {
  console.log(`
    ***********************
        Build My Team
    ***********************`);

  const conent = generateContent(data);
  fs.writeFile("./dist/index.html", content, (err) => {
    console.log(err);
  });
}
managerArr();
