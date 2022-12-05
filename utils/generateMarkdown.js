// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "Apache 2.0":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
    case "GPL 3.0":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    case "BSD 3":
      return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
    case "None":
      return "";
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
    case "Apache 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD 3":
      return "(https://opensource.org/licenses/BSD-3-Clause)";
    case "None":
      return "";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return "This app uses the MIT license:";
    case "Apache 2.0":
      return "This app uses the Apache 2.0 license:";
    case "GPL 3.0":
      return "This app uses the GPL 3.0 license:";
    case "BSD 3":
      return "This app uses the BSD 3 license:";
    case "None":
      return "";
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Contributing
  ${data.contributor}

  ## Tests
  ${data.tests}

  ## Questions
  Have questions? You can reach me at ${data.email}!
  
  You can also view my GitHub profile here: https://github.com/${data.username}
`;
}
// Module exports
module.exports = generateMarkdown;
