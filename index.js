<<<<<<< HEAD
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    message: "What is the title of your project?",
  },
  {
    name: "description",
    message: "What is the description of your project?",
  },

  {
    name: "Installation",
    message: "What is your installation information?",
  },
  {
    name: "Usage",
    message: "What can the project be used for?",
  },
  {
    name: "License",
    type: "list",
    message: "What type of Liscense do you have?",
    choices: ["MIT", "Apache", "None"]
  },
  {
    name: "contributing",
    message: "Who contributed to your project?",
  },
  {
    name: "tests",
    message: "What tests did you run?",
  },
  {
    name: "Questions",
    message: "What is your email address with instructions to reach out?",
  },
];

const askQuestions = (questions) => {
    return inquirer.prompt(questions);

}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      console.log(`${fileName} has been created successfully!`);
    });
  }
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    const readmeData = generateMarkdown(responses);

    fs.writeFile("README.md", readmeData, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("file created successfully");
      }
    });
  });
}

// Function call to initialize app
init();
=======
>>>>>>> 7a437332362df27555ec6f12e059bffb270402f3
