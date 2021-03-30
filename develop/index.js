const fs = require("fs");
const questions = require("./questions.js");
const licenseText = require("./license.js");
const inquirer = require("inquirer");
const generateReadme = (answers) =>
`# ${answers.title}

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
* [Contact](#contact)
* [License](#license)

# Description

${answers.description}

# Installation

${answers.installation}

# Usage

${answers.use}

# Contribution

${answers.contribution}

# Tests

${answers.testing}

# Contact

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
            break;
          case 'Apache':
            data.license = licenseText.apache;
            break;
        }
        const filename = "README.md";
        fs.writeFile(filename, generateReadme(data), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
        
    });