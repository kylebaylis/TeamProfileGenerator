const Generator = require('../lib/Generator');
jest.mock('../lib/__mocks__/Generator');

class Employee {
    constructor(name = '') {
        this.name = name;
        // this.id = id;
        // this.email = email;
    }
    /*
    getName() {

    }

    getId() {

    }

    getEmail() {
        
    }

    getRole() {

    }
    */
}

module.exports = Employee;