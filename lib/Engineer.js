const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name) {
        super(name);

        this.role = 'Engineer';
        this.github = '';
    }

    getRole() {
        return `The employee's role is: ${this.role}`;
    }

    getGithub() {
        return `The employee's GitHub username is: ${this.github}`;
    }
}

module.exports = Engineer;