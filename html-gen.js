// This will be what the Inquirer data is passed into and assembled.
const fs = require('fs');

// Each card object will be built on a boilerplate object that will be extended depending on the criteria entered.

const team = [];

class HTMLgen {
    addMember(emp) {
        team.push(emp);
    }
    applyMD() {
        genMarkdown(team);
    }
    clearTeam() {
        team.length = 0;
    }
}

makeCard = team => {
    for(let i = 0; i < team.length; i++) {
        let emp = team[i];
        if (emp.getRole() == 'Manager') {
            // return `Manager emp card`;
            return `
            <h1>${emp.name}</h1>
            <h2>Manager</h2>
            <ul>
            <li>ID: ${emp.id} </li>
            <li>Email: ${emp.email} </li>
            <li>Office ${emp.officeNumber} </li>
            </ul>
            `;
        } else if (emp.getRole() == 'Engineer') {
            // return `Engineer emp card`;
            return `
            <h1>${emp.name}</h1>
            <h2>Engineer</h2>
            <ul>
            <li>ID: ${emp.id} </li>
            <li>Email: ${emp.email} </li>
            <li>GitHub: ${emp.github} </li>
            </ul>
            `;
        } else {
            // return `Intern emp card`;
            return `
            <h1>${emp.name}</h1>
            <h2>Intern</h2>
            <ul>
            <li>ID: ${emp.id} </li>
            <li>Email: ${emp.email} </li>
            <li>School: ${emp.school} </li>
            </ul>
            `;
        }
    }
}

genMarkdown = team => {
    return `<header>

    </header>
    <main>
    ${makeCard(team)}
    </main>

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
