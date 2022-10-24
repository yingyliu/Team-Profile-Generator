const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Ying', 79, 'ying@fakemail.com', 'yingyliu');
    expect(engineer.github).toEqual(expect.any(String));
});

test("create a github", () => {
    const engineer = new Engineer('Ying', 79, 'ying@fakemail.com', 'yingyliu');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test("Testing role", () => {
    const engineer = new Engineer('Ying', 79, 'ying@fakemail.com');
    expect(engineer.getRole()).toEqual("Engineer");
});
