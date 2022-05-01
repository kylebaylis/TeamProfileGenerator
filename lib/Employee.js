class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = '';
        this.email = '';
        this.role = 'Employee';
    }
    
    getName() {
        return `The employee's name is: ${this.name}`;
    }

    getId() {
        return `The employee's ID is: ${this.id}`;
    }

    getEmail() {
        return `The employee's email is: ${this.email}`;
    }

    getRole() {
        return `The employee's role is: ${this.role}`;
    }
    
}

module.exports = Employee;