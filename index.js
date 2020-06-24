const readme = require("./Develop/index");
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
      message: readme.questions[4],
      name: "testInstructions",
    }
  ])
  .then(function (response) {
    console.log(response);

    // if (response.confirm === response.password) {
    //   console.log("Success!");
    // }
    // else {
    //   console.log("You forgot your password already?!");
    // }
  });
