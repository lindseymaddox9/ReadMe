const inquirer = require("inquirer");
const fs = require("fs");
const { Circle } = require("./lib/shapes");

inquirer.prompt([
    {
        type: 'list', 
        name: 'shapeChoice', 
        message: 'Please choose a shape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input', 
        name: 'text', 
        message: 'what do you want your logo to say'
    },
    {
        type: 'input', 
        name: 'shapeColor', 
        message: 'what do you want your shape color to be'
    },
    {
        type: 'input', 
        name: 'textColor', 
        message: 'what do you want your text color to be?'
    },
]).then((answers)=> {
    console.log(answers);
    
    const circle = new Circle(answers.text, answers.textColor, answers.shapeColor)
  
    fs.writeFile('logo.svg', circle.render(), (err)=> {
        if(err) console.log(err);
        console.log('file created');
    })

})
