// This will be what the Inquirer data is passed into and assembled.
const fs = require('fs');
// Each card object will be built on a boilerplate object that will be extended depending on the criteria entered.

const team = [];

class HTMLgen {
    addMember(emp) {
        team.push(emp);
    }
     applyMD() {
        console.log(team);
    }
    clearTeam() {
        // Clear the team array
    }
}

// makeCard(emp) {
//     return `
//     <h1>${emp.name}</h1>
//     `
// }
// genMarkdown(team) {
//     return // The bulk of the actual HTML doc goes here
// }

// testCall = () => {
//     console.log(`The new HTML gen object has called this function!`)
// }

module.exports = HTMLgen;