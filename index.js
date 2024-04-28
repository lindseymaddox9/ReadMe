// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs =  require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        name: 'title', 
        message: 'What is the title of your project?'
    },
    {
        type: 'input', 
        name: 'description', 
        message: 'What is the description of your project?'
    },
    {
        type: 'input', 
        name: 'table of contents', 
        message: 'List your table of Contents'
    },
    {
        type: 'input', 
        name: 'Installation', 
        message: 'What is your installation information?'
    },
    {
        type: 'input', 
        name: 'Usage', 
        message: 'What can the project be used for?'
    },
    {
        type: 'input', 
        name: 'License', 
        message: 'What type of Liscense do you have?'
    },
    {
        type: 'input', 
        name: 'contributing', 
        message: 'Who contributed to your project?'
    },
    {
        type: 'input', 
        name: 'tests', 
        message: 'What tests did you run?'
    },
    {
        type: 'input', 
        name: 'Questions', 
        message: 'What questions do you have for me?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses)=> {
        const readmeData = generateMarkdown(responses)
        
        fs.writeFile('README2.md', readmeData, (err)=> {
            if(err){
                console.log(err);
            }else{
                console.log('file created successfully');
            }
        })
    })
}

// Function call to initialize app
init();
