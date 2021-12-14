// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the project name?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Description of the project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation of the project',
        name: 'installation',
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your github license?",
        name: "license",
    },
    {

        type: 'input',
        message: "What is your github credits?",
        name: 'credits',
    }];

// TODO: Create a function to write README file
inquirer
  .prompt(questions)
.then((data) => {
    console.log(data)
    //const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile('readme.md', generateMarkdown(data), (err) => {
      err ? console.log(err) : console.log('Success!')
    });
  });


// Function call to initialize app
//init();
