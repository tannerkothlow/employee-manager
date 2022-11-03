// Main Inquirer prompt
const inquirer = require('inquirer');
const htmlGen = require('./html-gen');

const Manager = require('./classes/Manager');

// Manager Prompt
init = () => {
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
}

init()