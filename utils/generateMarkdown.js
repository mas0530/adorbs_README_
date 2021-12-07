// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT] (https://img.shields.io/badge/Lincese-MIT-yellow.svg)";

  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `${license.badge}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // ${renderLicenseLink()}
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description:
${data.description}
## Installation:
${data.installation}
## Usage:
${data.usage}
## Credits:
${data.credits}
# License: 
${data.License}
      `;
}

module.exports = generateMarkdown;


