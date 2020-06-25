// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description 
  ${data.title}

  ## Table of Contents (Optional)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Badges](#badges)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ## Usage 

  ## Credits

  ## License

  ## Badges

  ## Contributing

  ## Tests






`;
}

module.exports = generateMarkdown;
