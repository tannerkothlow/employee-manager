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
            return `Manager emp card`;
        } else if (emp.getRole() == 'Engineer') {
            return `Engineer emp card`;
        } else {
            return `Intern emp card`;
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
class GenTest {
    makeCard(team) {
        for(let i = 0; i < team.length; i++) {
            let emp = team[i];
            if (emp.getRole() == 'Manager') {
                return `Manager emp card`;
            } else if (emp.getRole() == 'Engineer') {
                return `Engineer emp card`;
            } else {
                return `Intern emp card`;
            }
        }
    }
}
module.exports = GenTest;

// module.exports = HTMLgen;
