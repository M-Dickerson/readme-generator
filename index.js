// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
inquirer
.prompt ([
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
    name: "title",
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
    name: "installation",
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
    name: "usage",
},
{
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributor",
},
])
// TODO: Create a function to write README file
.then ((response) => {
    let text = generateMarkdown(response);
    fs.writeFile ("./utils/README.md", text, (err) =>
    err ? console.error(err) : console.log("Success!"));
});