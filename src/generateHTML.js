const generateTeam = team => {

    const generateManager = manager => {
        return `
        <!-- Team Member-Manager-->
        <div class="col-4 mt-4">
        <div class="card border-dark mb-3" style="max-width: 18rem;">
            <div class="card-header">
                <h3>${manager.getName()}</h3>
                <h4>${manager.getRole()}</h4>
            </div>
            <div class="card-body text-dark">
            <p class="id">ID: ${manager.getId()}</p>
            <p class="email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p class="office=">Office Number: ${manager.getOfficeNumber()}</p>
            </div>
        </div>
    </div>
        `;
    };

    const generateEngineer = engineer => {
        return `
        <!-- Team Member-Engineer-->
        <div class="col-4 mt-4">
            <div class="card border-dark mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    <h3>${engineer.getName()}</h3>
                    <h4>${engineer.getRole()}</h4>
                </div>
                <div class="card-body text-dark">
                <p class="id">ID: ${engineer.getID()}</p>
                <p class="email">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                <p class="github">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
                </div>
            </div>
        </div>
        `;
    };

    const generateIntern = intern => {
        return `
        <!-- Team Member(5)-->
        <div class="col-4 mt-4">
        <div class="card border-dark mb-3" style="max-width: 18rem;">
            <div class="card-header">
                <h3>${intern.getName()}</h3>
                <h4>${intern.getRole()}</h4>
            </div>
            <div class="card-body text-dark">
            <p class="id">ID: ${intern.getID()}</p>
            <p class="email">Email:<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
            <p class="school">School: ${intern.getSchool()}</p>
            </div>
        </div>
        </div>
        `;
    };


    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}


module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <nav id="navbar navbar-light bg-light">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    ${generateTeam(team)}
                </div>
            </div>
        </main>
    </body>
    </html>
    `;
};

