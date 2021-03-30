const fs = require("fs");
const questions = require("./questions.js");
const licenseText = require("./license.js");
const inquirer = require("inquirer");
const generateHTML = (answers) =>
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