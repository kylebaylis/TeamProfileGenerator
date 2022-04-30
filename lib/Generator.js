const inquirer = require('inquirer');
const Employee = require('../lib/Employee');

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
            }
        ])
        .then(({ name }) => {
            this.employee = new Employee(name);
        },
        ({ id }) =>{
            this.employee.id = id;
        },
        ({ email }) => {
            this.employee.email = email;
        });
    }
}
