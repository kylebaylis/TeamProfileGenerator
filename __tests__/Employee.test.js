const Employee = require('../lib/Employee');

// test employee creation
test('creates an employee object', () => {
    const employee = new Employee('Kyle');

    expect(employee.name).toBe('Kyle');
    // expect(employee.id).toEqual(expect.any(String));
    // expect(employee.email).toEqual(expect.any(String));
});