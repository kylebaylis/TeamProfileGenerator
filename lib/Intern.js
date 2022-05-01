const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name) {
        super(name);

        this.role = 'Intern';
    }
}

module.exports = Intern;