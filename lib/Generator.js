const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

class Generator {
    constructor() {
        this.employees = [];
        this.manager;
        this.engineer;
        this.intern;
    }
    // to start generator and get manager's info
    initializeGenerator() {
        const manager = new Manager();
        this.employees.push(manager);

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
            manager.name = name;
        },
        ({ id }) => {
            manager.id = id;
        },
        ({ email }) => {
            manager.email = email;
        },
        ({ officeNumber }) => {
            manager.officeNumber = officeNumber;
        });
    }
}

module.exports = Generator;