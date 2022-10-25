const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { exit } = require('process');

const teamArray = [];

function createTeam() {
    inquirer.prompt ([
        {
            type: "list",
            name: "employeeList",
            message: "Please select the next employee you would like to add, otherwise feel free to exit.",
            choices: ["Manager", "Engineer", "Intern", "Exit", "Build a team"],
        }
    ])
    .then(answers => {
        const {employeeList} = answers;

        switch (employeeList) {
            case 'Manager':
                addManager()
                break;
            case 'Engineer':
                addEngineer()
                break;
            case 'Intern':
                addIntern()
                break;
            case 'Exit':
                exit()
                break;
            default:
                writeFile()
        }
    })
}


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
        const hireManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(hireManager);
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
        const hireEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(hireEngineer);
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
        const hireIntern = new Intern(answers.interName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(hireIntern);
        createTeam();
    })
}

const writeFile = () => {
    fs.writeFile('./dist/index.html', generateHTML(teamArray), err => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log("Team created!")
        }
    })
}

addManager()
    // .then(addEngineer)
    // .then((teamArray) => {
    //     return generateHTML(teamArray);
    // })
    // .then((htmlPageContent) => {
    //     return writeFile(htmlPageContent);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });


// function init(){
//     inquirer
//         .prompt(addManager)
//         .then(function (response) {
//             const htmlPageContent = generateHTML(response);
//         })
// }

// init()




