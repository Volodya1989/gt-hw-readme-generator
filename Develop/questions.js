var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message:   "What is the description of your project?",

    name: "description",
  },
  {
    type: "input",
    message:   "What are the installation instructions of your project?",

    name: "installationInstructions",
    default:"npm i"
  },
  {
    type: "input",
    message:   "What is the usage information of your project?",

    name: "usageInformation",
  },
  {
    type: "input",
    message:   "What is the contribution guidelines of your project?",

    name: "contributionGuidelines",
  },
  {
    type: "input",
    message:   "What is the test instructions of your project?",

    name: "testInstructions",
    default:"npm test"
  },
  {
    type: "input",
    message:   "What is your GitHub username?",

    name: "gitHub",
  },
  {
    type: "email",
    message:   "What is your email address?",

    name: "email",
  },
  {
    type: "input",
    message:   "To whom credit should be given for this project?",

    name: "credit",
  },
  {
    type: "list",
    message:  "What type of license do you want to choose?",

    name: "license",
    choices: ["MIT", "ICS", "GPL", "BSD"],
  },
  {
    type: "input",
    message:   "What is the license description that you want to include?",

    name: "licenseDescription",
  }
  
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}

module.exports = {
  questions: questions,
  writeToFile: writeToFile,
};
