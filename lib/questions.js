const questions = [
    {
        type:'confirm',
        name:'needEmp',
        message:'Would you like to fill a  new position?',
    },
    {
        type:'list',
        name:'role',
        message:'What position would you like fill?',
        choices:['Manager','Engineer','Intern'],
        when:({needEmp}) => needEmp
    },
    {
        type:'input',
        name:'name',
        message:'What is the employees name?',
        when:({needEmp}) => needEmp
    },
    {
        type:'input',
        name:'id',
        message:'What is the employees id?',
        when:({needEmp}) => needEmp
    },
    {
        type:'input',
        name:'email',
        message:'What is the employees email?',
        when:({needEmp}) => needEmp
    },
    {
        type:'input',
        name:'officeNumber',
        message:'What is the managers office number?',
        when:({role}) => role == 'Manager'
    },
    {
        type:'input',
        name:'github',
        message:'What is their GitHub account name?',
        when:({role}) => role == 'Engineer'
    },
    {
        type:'input',
        name:'school',
        message:'What is their schools name?',
        when:({role}) => role == 'Intern'
    },
]

module.exports = questions;