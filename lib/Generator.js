const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

class Generator {
    constructor() {
        this.manager;
    }
    // to start generator and get manager's info
    initializeGenerator() {
        inquirer
        .prompt([
            {
            type: 'text',
            name: 'name',
            message: 'What is your name?'
            },
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
        .then(({ name }) => {
            this.name = name;
        },
        ({ id }) => {
            this.id = id;
        },
        ({ email }) => {
            this.email = email;
        },
        ({ officeNumber }) => {
            this.officeNumber = officeNumber;
        });
    }
}

module.exports = Generator;