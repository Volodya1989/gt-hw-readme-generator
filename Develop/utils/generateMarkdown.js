// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Contributor Covenant](https://img.shields.io/badge/license-${data.license}-brightgreen)

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
  ${data.credit}
  ## License
  ${data.licenseDescription}
  ## Contributing
  ${data.contributionGuidelines}
  ## Tests
  ${data.testInstructions}
  ## Questions
  [Link to my GitHub Repository ]( https://github.com/${data.gitHub})  

  If you have any question or suggestion, please you can reach by sending email to ${data.email}

`;
}

module.exports = generateMarkdown;
