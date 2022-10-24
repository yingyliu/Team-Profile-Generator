const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Ying', 79, 'ying@fakemail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Testing name', () => {
    const employee = new Employee('Ying', 79, 'ying@fakemail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test('Testing ID', () => {
    const employee = new Employee('Ying', 79, 'ying@fakemail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('Testing email', () => {
    const employee = new Employee('Ying', 79, 'ying@fakemail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('Testing role', () => {
    const employee = new Employee('Ying', 79, 'ying@fakemail.com');
    expect(employee.getRole()).toEqual("Employee");
});



