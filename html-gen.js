// This will be what the Inquirer data is passed into and assembled.
const fs = require('fs');

// Each card object will be built on a boilerplate object that will be extended depending on the criteria entered.

const team = [];

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
            <li>Email: ${emp.email} </li>
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
            <li>Email: ${emp.email} </li>
            <li>GitHub: ${emp.github} </li>
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
            <li>Email: ${emp.email} </li>
            <li>School: ${emp.school} </li>
            </ul>
            </div>
            `;
        }
    }
    return cards;
}

genMarkdown = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Emp Gen</title>
    </head>
    <body>
    <header><h1>Employee Manager</h1></header>
    <div class="card-box">
    <div class="card-holder">
    ${makeCard(team)}
    </div>
    </div>
    </body>
    </html>

    `
}

// Exported to test at some point
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
