var fs = require("fs");
var generate = require("./utils/generateMarkdown");


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
];

// function to write README file
function writeToFile(fileName, data) {
    
// generate.generateMarkdown(data)
  fs.writeFile(fileName, JSON.stringify(data, null, "\t"), function (err) {
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
