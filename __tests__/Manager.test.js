const Manager = require('../lib/Manager');

// test manager creation
test('creates a manager object', () => {
    const manager = new Manager('Kyle');

    expect(manager.role).toEqual('Manager');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});