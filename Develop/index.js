var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  "What is the title of your project?",
  "What is the description of your project?",
  "What are the installation instructions of your project?",
  "What is the usage information of your project?",
  "What is the contribution guidelines of your project?",
  "What is the test instructions of your project?",
  "What is your GitHub username?",
  "What is your email address?",
  "To whom credit should be given for this project?",
  "What type of license do you want to choose?",
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

// function to initialize program
function init() {}

// function call to initialize program
init();

module.exports = {
  questions: questions,
  writeToFile: writeToFile,
  init: init,
};
