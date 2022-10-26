// execute employee constructor
const Employee = require('../lib/Employee');

// generate employee object
test('creates an employee object', () => {
    const employee = new Employee('Ying', 79, 'ying@fakemail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// retrieve name
test('Testing name', () => {
    const employee = new Employee('Ying', 79, 'ying@fakemail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

// retrieve ID
test('Testing ID', () => {
    const employee = new Employee('Ying', 79, 'ying@fakemail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

// retrieve email
test('Testing email', () => {
    const employee = new Employee('Ying', 79, 'ying@fakemail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// retrieve role
test('Testing role', () => {
    const employee = new Employee('Ying', 79, 'ying@fakemail.com');
    expect(employee.getRole()).toEqual("Employee");
});



