// execute manager constructor
const Manager = require('../lib/Manager');

// generate manager object
test('create Manager object', () => {
    const manager = new Manager('Ying', 79, 'ying@fakemail.com', 5);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// retrieve role
test('tseting role', () => {
    const manager = new Manager('Ying', 79, 'ying@fakemail.com');
    expect(manager.getRole()).toEqual("Manager");
});