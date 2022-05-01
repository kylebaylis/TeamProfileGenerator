const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

class Generator {
    constructor() {

    }
    // to start generator
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
            type: 'text',
            name: 'office',
            message: 'What is your office number?'
            }
        ])
        .then(({ name }) => {
            this.employee = new Manager(name);
        },
        ({ id }) =>{
            this.employee.id = id;
        },
        ({ email }) => {
            this.employee.email = email;
        },
        ({ office }) => {
            this.employee.office = officeNumber;
        });
    }
}

module.exports = Generator;