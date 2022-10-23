const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');

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

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's employee ID number?"
        },

        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub username?"
        }
    ])
    .then(answers => {
        const Engineer = new Engineer(answers.engineerName, answer.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(Engineer);
        createTeam();
    });
}

