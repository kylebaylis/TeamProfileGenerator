const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name) {
        super(name);

        this.role = 'Manager';
        this.officeNumber = 0;
    }

    getRole() {
        return `The employee's role is: ${this.role}`;
    }

    getOfficeNumber() {
        return `The employee's office number is: ${this.officeNumber}`;
    }
}

module.exports = Manager;