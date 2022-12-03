// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[MIT license](https://img.shields.io/npm/l/np?style=flat-square)";
    case "Apache 2.0":
      return "Apache 2.0 license";
    case "GPL 3.0":
      return "GPL 3.0 license";
    case "BSD 3":
      return "BSD 3 license";
    case "None":
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "MIT license";
    case "Apache 2.0":
      return "Apache 2.0 license";
    case "GPL 3.0":
      return "GPL 3.0 license";
    case "BSD 3":
      return "BSD 3 license";
    case "None":
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
