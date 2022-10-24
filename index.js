const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const teamArray = [];

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
        const Engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(Engineer);
        createTeam();
    });
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "interName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's email address?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school does the intern attend?"
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.interName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        createTeam();
    })
}

const writeFile = data => {
    fs.writeFile('/dist/index.html', data, err => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log("Team created!")
        }
    })
}

addManager()
    .then(addEngineer)
    .then(addIntern)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(indexHTML => {
        return writeFile(indexHTML);
    })
    .catch(err => {
        console.log(err);
    });