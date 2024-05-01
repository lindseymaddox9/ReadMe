const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

inquirer
  .prompt([
    {
      type: "list",
      name: "shapeChoice",
      message: "Please choose a shape",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "text",
      message: "What do you want the logo to say",
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What do you want the shape color to be?",
    },
    {
      type: "input",
      name: "textColor",
      message: "What do you want the text color to be?",
    },
  ])
  .then((answers) => {
    switch (answers.shapeChoice) {
      case "Circle":
        const circle = new Circle(
          answers.text,
          answers.textColor,
          answers.shapeColor
        );
        fs.writeFile("logo.svg", circle.render(), (err) => {
          if (err) console.log(err);
          console.log("generated logo.svg");
        });
        break;
      case "Triangle":
        const triangle = new Triangle(
          answers.text,
          answers.textColor,
          answers.shapeColor
        );
        fs.writeFile("logo.svg", triangle.render(), (err) => {
          if (err) console.log(err);
          console.log("generated logo.svg");
        });
        break;
      case "Square":
        const square = new Square(
          answers.text,
          answers.textColor,
          answers.shapeColor
        );
        fs.writeFile("logo.svg", square.render(), (err) => {
          if (err) console.log(err);
          console.log("generated logo.svg");
        });
        break;
    }

    console.log(answers);
  });
