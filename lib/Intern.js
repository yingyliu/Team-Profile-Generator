// bring in data from employee.js
const Employee = require('./Employee');

// extend data from employee.js
class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    //get value from input
    getSchool () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}

//export
module.exports = Intern;
