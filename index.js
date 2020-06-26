const questions = require("./Develop/questions");
const inquirer = require("inquirer");

// function to initialize program
function init() {
  inquirer.prompt(questions.questions).then(function (data) {
    console.log(data);
    //naming new created file
    const fileName = "sampleREADME.md";
    //we can make fileName dynamically generated using commented code below
    // var fileName = data.title.toUpperCase().split(" ").join("") + ".md";
    questions.writeToFile(fileName, data);
  });
}

// function call to initialize program
init();
