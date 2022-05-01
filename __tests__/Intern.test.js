const Intern = require('../lib/Intern');

// test intern creation
test('creates a intern object', () => {
    const intern = new Intern('Kyle');

    expect(intern.role).toEqual('Intern');
    expect(intern.school).toEqual(expect.any(String));
});