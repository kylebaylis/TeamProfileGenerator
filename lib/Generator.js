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
        inquirer
        .prompt([
            {
            type: 'text',
            name: 'id',
            message: 'What is your ID?'
            },
            {
            type: 'text',
            name: 'email',
            message: 'What is your email?'
            },
            {
            type: 'number',
            name: 'officeNumber',
            message: 'What is your office number?'
            }
        ])
        .then(({ id }) =>{
            this.manager.id = id;
        },
        ({ email }) => {
            this.manager.email = email;
        },
        ({ officeNumber }) => {
            this.manager.officeNumber = officeNumber;
        });
    }
}

module.exports = Generator;