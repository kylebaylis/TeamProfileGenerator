const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name) {
        super(name);

        this.role = 'Manager';
    }
}

module.exports = Manager;