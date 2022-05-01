const Engineer = require('../lib/Engineer');

// test engineer creation
test('creates a engineer object', () => {
    const engineer = new Engineer('Kyle');

    expect(engineer.role).toEqual('Engineer');
    expect(engineer.github).toEqual(expect.any(String));
});