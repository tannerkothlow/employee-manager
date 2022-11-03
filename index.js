// Main Inquirer prompt
const inquirer = require('inquirer');
const htmlGen = require('./html-gen');

const Manager = require('./classes/Manager');

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
            console.log(manager);
        })
        .then(() => {
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
            applyTeam();
        }
    })
}

managerInit()