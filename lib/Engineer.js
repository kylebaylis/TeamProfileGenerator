const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name) {
        super(name);

        this.role = 'Engineer';
    }
}

module.exports = Engineer;