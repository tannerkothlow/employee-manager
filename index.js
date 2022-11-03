// Main Inquirer prompt
const inquirer = require('inquirer');
const htmlGen = require('./html-gen');


init = () => {
    inquirer
        .prompt([
            {
                message: `This is a test question`,
                name: `testResponse`
            }
        ])
        .then((response) => {
            console.log(response.testResponse);
        })
}

init()