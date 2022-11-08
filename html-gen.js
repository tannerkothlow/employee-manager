// This JS handles the data provided by the Inquirer prompts

const fs = require('fs');

const team = [];

// Exports just the functions needed in index.js.
class HTMLgen {
    addMember(emp) {
        team.push(emp);
    }
    applyMD() {
        fs.writeFile('./output/team.html', genMarkdown(team), err => {
            if (err) {
                console.error(err);
            }
        });
    }
    clearTeam() {
        team.length = 0;
    }
}

// Generates a card object for each team member in the team array.
makeCard = team => {
    let cards = '';
    for(let i = 0; i < team.length; i++) {
        let emp = team[i];
        if (emp.getRole() == 'Manager') {
            // return `Manager emp card`;
            cards += `
            <div class="emp-card">
            <h1>${emp.name}</h1>
            <h2>Manager</h2>
            <ul>
            <li>ID: ${emp.id} </li>
            <li>Email: <a href="mailto: ${emp.email}">${emp.email}</a> </li>
            <li>Office ${emp.officeNumber} </li>
            </ul>
            </div>
            `;
        } else if (emp.getRole() == 'Engineer') {
            // return `Engineer emp card`;
            cards += `
            <div class="emp-card">
            <h1>${emp.name}</h1>
            <h2>Engineer</h2>
            <ul>
            <li>ID: ${emp.id} </li>
            <li>Email: <a href="mailto: ${emp.email}">${emp.email}</a> </li>
            <li>GitHub: <a href="https://github.com/${emp.github}">${emp.github}</a> </li>
            </ul>
            </div>
            `;
        } else {
            // return `Intern emp card`;
            cards += `
            <div class="emp-card">
            <h1>${emp.name}</h1>
            <h2>Intern</h2>
            <ul>
            <li>ID: ${emp.id} </li>
            <li>Email: <a href="mailto: ${emp.email}">${emp.email}</a> </li>
            <li>School: ${emp.school} </li>
            </ul>
            </div>
            `;
        }
    }
    return cards;
}

// Returns an HTML doc as a string, which is written in the applyMD() function.
genMarkdown = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Emp Gen</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
    <header><h1>Our Team</h1></header>
    <div class="card-box">
    <div class="card-holder">
    ${makeCard(team)}
    </div>
    </div>
    </body>
    </html>

    `
}

// Exported makeCard() to test

// class GenTest {
//     makeCard(team) {
//         for(let i = 0; i < team.length; i++) {
//             let emp = team[i];
//             if (emp.getRole() == 'Manager') {
//                 // return `Manager emp card`;
//                 return ``;
//             } else if (emp.getRole() == 'Engineer') {
//                 // return `Engineer emp card`;
//                 return ``;
//             } else {
//                 // return `Intern emp card`;
//                 return ``;
//             }
//         }
//     }
// }
// module.exports = GenTest;

module.exports = HTMLgen;
