// bring in data from employee.js
const Employee = require ('./Employee');

// extend data from employee.js
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // get value from input
    getOfficeNumber () {
        return this.officeNumber;
    }

    getRole () {
        return "Manager";
    }
}

//export
module.exports = Manager;