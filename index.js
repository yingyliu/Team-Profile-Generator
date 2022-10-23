const Manager = require('./lib/Manager.test.js');

teamArray = [];

function addManager() {
    inquirer.prompt ([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's employee ID number?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?"
        }
    ])
    .then(answers => {
        const Manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(Manager);
        createTeam();
    });
}



