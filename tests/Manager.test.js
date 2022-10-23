const Manager = require('../lib/Manager');

test('create Manager object', () => {
    const manager = new Manager('Ying', 79, 'ying@fakemail.com', 5);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('tseting role', () => {
    const manager = new Manager('Ying', 79, 'ying@fakemail.com');
    expect(manager.getRole()).toEqual("Manager");
});