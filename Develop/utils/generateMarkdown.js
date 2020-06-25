// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  //here goes should go badge according to the license chosen

  ## Description 
  ${data.description}

  ## Table of Contents (Optional)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installationInstructions}
  ## Usage 
  ${data.usageInformation}
  ## Credits
  ${data.title}
  ## License
  ${data.title}
  // here goes list of options for a license for users application 
  ## Contributing
  ${data.contributionGuidelines}
  ## Tests
  ${data.testInstructions}
  ##Questions
  https://github.com/${data.GitHub}
  
  //here goes instructions on how to reach me with additional questions

  ${data.Email}






`;
}

module.exports = generateMarkdown;
