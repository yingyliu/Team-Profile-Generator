// execute intern constructor
const Intern = require ('../lib/Intern');

// generate intern object
test('creates an Intern object', () => {
    const intern = new Intern('Ying', 79, 'ying@fakemail.com', 'UWA');
    expect(intern.school).toEqual(expect.any(String));
});

// retrieve school name
test('get employee school', () => {
    const intern = new Intern('Ying', 79, 'ying@fakemail.com', 'UWA');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// retrieve role
test("Testing role", () => {
    const intern = new Intern('Ying', 79, 'ying@fakemail.com', 'UWA');
    expect(intern.getRole()).toEqual("Intern");
});
