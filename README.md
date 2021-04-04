## EZ README

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

# Description

This is a node terminal app that allows the user to easily create a README.md file by answering a series of prompts via inquirer. Once the prompts have been answered, a writeFile function executes and generates a readme based on a standard template, creating a professional readme, including the appropriate license text and badge. This readme has been generated using the program, and is currently being used as a test. It will be further detailed out as the project nears completion.

Because this app is solely a command line program, it is not deployed. For a demonstration of its functionality, please view the video at this link:

<a href="https://drive.google.com/file/d/1XZZSvq09aiZ2KiBXq5jO2FamPRI9qa7W/view" target="_blank">App Demo Video</a>

# Installation

Clone the repo and open it in your code editor of choice and install the necessary dependencies via the termnial:

`npm i`

# Usage

Once the installations have completed, initiate the app in the terminal:

`node index.js`

Follow the prompts in the terminal, adding the appropriate information about your repo. Please note - the README template is a template string, so you should be able to use both single and double quotes safely without risk of interrupting the string. Using triple backticks to create a code block should work as well. Using a single backtick outside of a code block, on the other hand, could cause an error.

Once all prompts have been answered, a file named README.md will be generated in the working directory. This is your README.md file! Please note, running the program again will directly overwrite it, so make sure to relocate the file if you would like to make several versions.

# Contributing

Fork the repo to your own GitHub profile, create a new branch, and make changes as you wish. Once finished, push the changes up to your branch and create a new pull request so they can be reviewed.

# Tests

As this app grows in complexity, testing may become necessay, but for the time being it is a simple command line program with a simple structure. Nevertheless, please feel free to search for bugs and follow up via the contacts in the questions section below if anything needs to be reported.

# Questions

Please reach out through either method below if you have any questions:

- <a href="https://github.com/tomekregulski" target="_blank">Github</a>
- <a href="mailto:tomek.regulski@gmail.com">tomek.regulski@gmail.com</a>

# License

[MIT License](https://opensource.org/licenses/MIT)
