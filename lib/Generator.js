const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

class Generator {
    constructor() {

    }
    // to start generator and get manager's name
    initializeGenerator() {
        inquirer
        .prompt(
            {
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        })
        .then(({ name }) => {
            this.manager = new Manager(name);

            this.initializeManager();
        });
    }

    // to get manager's info
    initializeManager() {
        console.log('hi');
    }
}

module.exports = Generator;