// Main Inquirer prompt
const inquirer = require('inquirer');
// const HtmlGen = require('./html-gen.js');

const Manager = require('./classes/Manager');
const Engineer = require('./classes/Engineer');
const Intern = require('./classes/Intern');

// Manager Prompt
managerInit = () => {
    inquirer
        .prompt([
            {
                message: `Enter the team manager's name:`,
                name: `managerName`
            },
            {
                message: `Enter the team manager's employee ID:`,
                name: `managerId`
            },
            {
                message: `Enter the team manager's email address:`,
                name: `managerEmail`
            },
            {
                message: `Enter the team manager's office number:`,
                name: `managerOffice`
            }
        ])
        .then((response) => {
            const {managerName, managerId, managerEmail, managerOffice} = response;
            const manager = new Manager(managerName, managerId, managerEmail, managerOffice);
            // Add function that passes it to html-gen.js

            addEmployee();
        })
}

addEmployee = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                choices: [`Engineer`, `Intern`, `APPLY`],
                message: `Chose a teammate to add, or apply your choices:`,
                name: `newTeammate`
            }
        ])
        .then((response) => {
            console.log(response.newTeammate);
            // Check what the newTeammate equals, split Engineer and Intern into their own inquirer functions
            if (response.newTeammate == 'Engineer') {
                addEngineer();
            } else if (response.newTeammate == 'Intern') {
                addIntern();
            } else {
                applyMD();
            }
        })
}

addEngineer = () => {
    inquirer
    .prompt([
        {
            message: `Enter the employee's name:`,
            name: `engiName`
        },
        {
            message: `Enter the employee's ID:`,
            name: `engiID`
        },
        {
            message: `Enter the employee's email address:`,
            name: `engiEmail`
        },
        {
            message: `Enter the employee's gitHub username:`,
            name: `engiGithub`
        }
    ])
    .then((response) => {
        const {engiName, engiID, engiEmail, engiGithub} = response;
        const engineer = new Engineer(engiName, engiID, engiEmail, engiGithub);
        // Add function that passes it to html-gen.js

        addEmployee();
    })
}

addIntern = () => {
    inquirer
    .prompt([
        {
            message: `Enter the employee's name:`,
            name: `internName`
        },
        {
            message: `Enter the employee's ID:`,
            name: `internID`
        },
        {
            message: `Enter the employee's email address:`,
            name: `internEmail`
        },
        {
            message: `Enter the employee's school:`,
            name: `internSchool`
        }
    ])
    .then((response) => {
        const {internName, internID, internEmail, internSchool} = response;
        const engineer = new Intern(internName, internID, internEmail, internSchool);
        // Add function that passes it to html-gen.js

        addEmployee();
        })
}

applyMD = () => {

}

managerInit()