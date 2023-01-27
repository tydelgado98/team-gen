const {prompt} = require('inquirer');
const {questions,htmlGen,Manager,Engineer,Intern} = require('./lib');

let positions = {
    Managers:[],
    Engineers:[],
    Interns:[]
};

const init = () => prompt(questions).then(ans => {
    let { role,name,id,email } = ans;

    if(role=='Manager') positions.Managers.push(new Manager(name,id,email,ans.officeNumber));
    if(role=='Engineer') positions.Engineers.push(new Engineer(name,id,email,ans.github));
    if(role=='Intern') positions.Interns.push(new Intern(name,id,email,ans.school));
    
    if(ans.needEmp) return init();
    htmlGen(positions);
});

init();

