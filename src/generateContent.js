const generateContent = (team) => {
  console.log(team);
  const html = [];

  const createManager = (newManager) => {
    console.log(newManager);
    let managerHTML = `
        <div class="columns is-variable">
            <div class="card column box">
                <h1 class="title"> ${newManager.name}</h1>
                <h3 class="subtitle"> Manager </h3>
                <ul>
                    <li>
                        <p> Manager ID: ${newManager.id}</p>
                    </li>
                    <li>
                        <p> Primary Email: <a href="mailto:${newManager.email}" target="_blank"> </p>
                    </li>
                    <li>
                        <p> Office Number: ${newManager.officeNumber}/p>
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
        <div class="columns is-variable">
            <div class="card column box">
                <h1 class="title"> ${newEngineer.name}</h1>
                <h3 class="subtitle"> Engineer </h3>
                <ul>
                    <li>
                        <p> Engineer ID: ${newEngineer.id}</p>
                    </li>
                    <li>
                        <p> Primary Email: <a href="mailto:${newEngineer.email}" target="_blank"> </p>
                    </li>
                    <li>
                        <p> GitHub Profile: <a href="https://github.com/${newEngineer.github}" target="_blank"> </p>
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
        <div class="columns is-variable">
            <div class="card column box">
                <h1 class="title"> ${newIntern.name}</h1>
                <h3 class="subtitle"> Intern </h3>
                <ul>
                    <li>
                        <p> Intern ID: ${newIntern.id}</p>
                    </li>
                    <li>
                        <p> Primary Email: <a href="mailto:${newIntern.email}" target="_blank"> </p>
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

module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.css" integrity="sha512-7VGuxKU1BFMmA+dC7NiW8jF0YOIe6bibjUBr42unVtEsI/UYzXMS3nkgNvmsY4yqauxeiEs4bXF6fPLsCuxN/A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./assests/css/style.css"/>
    <title>Team Profile Generator</title>
</head>

<body>
<!--Header-->
  <section class="hero is-small is-primary">
    <div class="hero-body">
      <p class="title">
        My Team
      </p>
    </div>
  </section>
  <main> ${generateContent(team)}</main>
</body>
</html>
    `;
};

module.exports = generateContent;
