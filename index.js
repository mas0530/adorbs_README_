// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is the project name?',
        name: 'Project Titile'
    },
    {
        type: 'input',
        message: 'Description of the project',
        name: 'Description of the project',
    },
    {

    },
     {       
        type: "input".
        message: "Description of the project",
        name: "Description",
},
{
        type: "input",
        message: "What is your github username?",
        name: "Github username",
{,
}
        
        type: 'input',
        message: 'What do users need to know before using this?',
        name: 'readme',
}];
        
// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
        fs.writeFile(fileName, (data), (err) => {
                err ? console.error(err) : console.log("No errors!";
   )};
 


// TODO: Create a function to initialize app
function init() {
        inquirer.prompt(questions)
        .then((answers) => {
           console.log('Generating README');
           writeToFile('README.md', answers);
        });
}


// Function call to initialize app
init();
