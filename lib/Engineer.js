const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name) {
        super(name);

        this.role = 'Engineer';
        this.github = '';
    }

    getGithub() {
        return `The employee's GitHub username is: ${this.github}`;
    }
}

module.exports = Engineer;