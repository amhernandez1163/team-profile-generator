// Build of Manager, Intern, Engineer based on user input with all necessary HTML
const generateContent = (team) => {
  console.log(team);
  const html = [];

  const createManager = (newManager) => {
    console.log(newManager);
    let managerHTML = `
        <div class="card">
            <div class="card-header box">
                <h1 class="title"> ${newManager.name}</h1>
                <h3 class="subtitle"> Manager </h3>
                <ul>
                    <li>
                        <p> Manager ID: ${newManager.id}</p>
                    </li>
                    <li>
                        <p> Primary Email: <a href="mailto:${newManager.email}" target="_blank">${newManager.email}</a></p>
                    </li>
                    <li>
                        <p> Office Number: ${newManager.officeNumber}</p>
                    </li>
                </ul>
            </div>
        </div>
        `;
    html.push(managerHTML);
  };

  const createEngineer = (newEngineer) => {
    console.log(newEngineer);
    let engineerHTML = `
        <div class="card">
            <div class="card-header box">
                <h1 class="title"> ${newEngineer.name}</h1>
                <h3 class="subtitle"> Engineer </h3>
                <ul>
                    <li>
                        <p> Engineer ID: ${newEngineer.id}</p>
                    </li>
                    <li>
                        <p>Primary Email: <a href="mailto:${newEngineer.email}" target="_blank">${newEngineer.email}</a></p>
                    </li>
                    <li>
                        <p> GitHub Profile: <a href="https://github.com/${newEngineer.github}" target="_blank">${newEngineer.github}</a></p>
                    </li>
                </ul>
            </div>
        </div>
        `;
    html.push(engineerHTML);
  };

  const createIntern = (newIntern) => {
    console.log(newIntern);
    let internHTML = `
        <div class="card">
            <div class="card-header box">
                <h1 class="title"> ${newIntern.name}</h1>
                <h3 class="subtitle"> Intern </h3>
                <ul>
                    <li>
                        <p> Intern ID: ${newIntern.id}</p>
                    </li>
                    <li>
                        <p> Primary Email: <a href="mailto:${newIntern.email}" target="_blank">${newIntern.email}</a> </p>
                    </li>
                    <li>
                        <p> School: ${newIntern.school}</p>
                    </li>
                </ul>
            </div>
        </div>
        `;
    html.push(internHTML);
  };

  // for loop checking for status of getRole() to equal terms from our lib/js
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      createManager(team[i]);
    }
    if (team[i].getRole() === "Engineer") {
      createEngineer(team[i]);
    }
    if (team[i].getRole() === "Intern") {
      createIntern(team[i]);
    }
  }

  return html.join("");
};

// basic HTML for page generation
module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Team Profile Generator</title>
</head>

<body>
<main>
<!--Header-->
  <section class="hero is-small is-primary">
      <p class="title">
        My Team
      </p>
  </section>

  ${generateContent(team)}
  
  </main>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
    `;
};
