const fs = require("fs");
const questions = require("./questions.js");
const licenseText = require("./license.js");
const badgeIcon = require("./badges.js");
const inquirer = require("inquirer");
let badge;
const generateReadme = (answers) =>
`# ${answers.title}

${badge}

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

# Description

${answers.description}

# Installation

${answers.installation}

# Usage

${answers.use}

# Contributing

${answers.contributing}

# Tests

${answers.testing}

# Questions

Please reach out through either method below if you have any questions:
${answers.gitName}
${answers.email}

# License

${answers.license}`;

inquirer
    .prompt(questions)
    .then((data,) => {
        switch(data.license) {
          case 'MIT':
            data.license = licenseText.mit;
            badge = badgeIcon.mit
            break;
          case 'Apache':
            data.license = licenseText.apache;
            badge = badgeIcon.apache
            break;
          case 'GNU GPLv3':
            data.license = licenseText.gnu;
            badge = badgeIcon.gnu
            break;
          case 'ISC':
            data.license = licenseText.isc;
            badge = badgeIcon.isc
            break;
        }
        const filename = "README.md";
        fs.writeFile(filename, generateReadme(data), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
        
    });