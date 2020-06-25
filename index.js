const readme = require("./Develop/index");
var generate = require("./Develop/utils/generateMarkdown");
var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: readme.questions[0],
      name: "title",
    },
    {
      type: "input",
      message: readme.questions[1],
      name: "description",
    },
    {
      type: "input",
      message: readme.questions[2],
      name: "installationInstructions",
    },
    {
      type: "input",
      message: readme.questions[3],
      name: "usageInformation",
    },
    {
      type: "input",
      message: readme.questions[4],
      name: "contributionGuidelines",
    },
    {
      type: "input",
      message: readme.questions[5],
      name: "testInstructions",
    },
    {
      type: "input",
      message: readme.questions[6],
      name: "GitHub",
    },
    {
      type: "email",
      message: readme.questions[7],
      name: "Email",
    },
  ])
  .then(function (data) {
    console.log(data);
    var fileName = data.title.toLowerCase().split(" ").join("") + ".md";
    readme.writeToFile(fileName, data);
    // generate.generateMarkdown(data)
  });
