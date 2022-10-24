const Intern = require ('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Ying', 79, 'ying@fakemail.com', 'UWA');
    expect(intern.school).toEqual(expect.any(String));
});

test('get employee school', () => {
    const intern = new Intern('Ying', 79, 'ying@fakemail.com', 'UWA');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test("Testing role", () => {
    const intern = new Intern('Ying', 79, 'ying@fakemail.com', 'UWA');
    expect(intern.getRole()).toEqual("Intern");
});
