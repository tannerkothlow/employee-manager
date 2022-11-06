// Imports
const inquirer = require('inquirer');
const HTMLgen = require('./html-gen.js');
const Manager = require('./classes/Manager');
const Engineer = require('./classes/Engineer');
const Intern = require('./classes/Intern');

const MDgen = new HTMLgen;

// Main Inquirer prompt

// Manager Prompt
managerInit = () => {
    // Due to scope of MDgen, needs a team clear function, difficulties arise when just trying to declare a new HTMLgen within the function.
    MDgen.clearTeam();
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
            MDgen.addMember(manager);

            addEmployee();
        })
}
// Add employee master prompt
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
                MDgen.applyMD();
            }
        })
}
// Prompt when engineer was chosen
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
        MDgen.addMember(engineer);

        addEmployee();
    })
}
//Prompt when intern was chosen.
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
        const intern = new Intern(internName, internID, internEmail, internSchool);
        MDgen.addMember(intern);

        addEmployee();
        })
}

// Starts the program
managerInit()