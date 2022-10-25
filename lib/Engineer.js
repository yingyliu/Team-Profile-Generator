// bring in data from employee.js
const Employee = require("./Employee");

// extend data from employee.js
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // get value from input
    getGithub () {
        return this.github;
    }

    getRole () {
        return "Engineer";
    }
}

//export
module.exports = Engineer;