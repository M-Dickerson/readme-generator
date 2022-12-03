// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
{   type: "input",
    message: "What is your GitHub username?",
    name: "username",
},
{
    type: "input",
    message: "What is your email address?",
    name: "email",
},
{
    type: "input",
    message: "What is your project's name?",
    name: "project",
},
{
    type: "input",
    message: "Write a short description of your project:",
    name: "description",
},
{
    type: "list",
    message: "What kind of license should your project have?",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
    name: "license",
},
{
    type: "default",
    message: "What command should be run to install dependencies?",
    default: ("npm i"),
    name: "dependencies",
},
{
    type: "default",
    message: "What command should be run to run tests?",
    default: ("npm test"),
    name: "tests",
},
{
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "using",
},
{
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing",
},
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('log.txt', process.argv[3], (err) =>
  err ? console.error(err) : console.log('Success!'));
};
// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
};
// Function call to initialize app
init();
