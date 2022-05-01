const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name) {
        super(name);

        this.role = 'Intern';
        this.school = '';
    }

    getRole() {
        return `The employee's role is: ${this.role}`;
    }

    getSchool() {
        return `The employee's school is: ${this.school}`;
    }
}

module.exports = Intern;