const { writeFile } = require('fs');

let output = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="stylesheet" href="./style.css">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <header>
    <h1>Team Builder</h1>
    </header>
`;

const htmlGen = ({Managers,Engineers,Interns}) => {
    if(Managers.length) {
        output += '<div class="row">'

        Managers.forEach(mgr => {
            output += `
                <div class="card">
                    <h1>${mgr.getName()}</h1>
                    <h3>Manager</h3>
                    <h4>ID: ${mgr.getId()}</h4>
                    <h4>Email: ${mgr.getEmail()}</h4>
                    <h4>Office number: ${mgr.getOfficeNumber()}</h4>
                </div>
            `;
        });

        output += '</div>'
    };
    if(Engineers.length) {
        output += '<div class="row">'

        Engineers.forEach(eng => {
            output += `
                <div class="card">
                    <h1>${eng.getName()}</h1>
                    <h3>Engineer</h3>
                    <h4>ID: ${eng.getId()}</h4>
                    <h4>Email: ${eng.getEmail()}</h4>
                    <h4>GitHub: ${eng.getGithub()}</h4>
                </div>
            `;
        });

        output += '</div>'
    };
    if(Interns.length) {
        output += '<div class="row">'

        Interns.forEach(int => {
            output += `
                <div class="card">
                    <h1>${int.getName()}</h1>
                    <h3>Intern</h3>
                    <h4>ID: ${int.getId()}</h4>
                    <h4>Email: ${int.getEmail()}</h4>
                    <h4>School: ${int.getSchool()}</h4>
                </div>
            `;
        });
        output += '</div>'
    };

    output += '</body></html>';
    writeFile('dist/team.html', output, ()=> console.log('Completed team.html file!'));
}

module.exports = htmlGen;