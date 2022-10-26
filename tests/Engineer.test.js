// execute engineer constructor
const Engineer = require('../lib/Engineer');

// generate engineer object
test('creates an Engineer object', () => {
    const engineer = new Engineer('Ying', 79, 'ying@fakemail.com', 'yingyliu');
    expect(engineer.github).toEqual(expect.any(String));
});

// retrieve github
test("create a github", () => {
    const engineer = new Engineer('Ying', 79, 'ying@fakemail.com', 'yingyliu');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// retrieve role
test("Testing role", () => {
    const engineer = new Engineer('Ying', 79, 'ying@fakemail.com');
    expect(engineer.getRole()).toEqual("Engineer");
});
