module.exports = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "What is your project description?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are your instructions for installation?",
  },
  {
    type: "input",
    name: "use",
    message: "What are your instructions for use?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What are your guidelines for contributing?",
  },
  {
    type: "input",
    name: "testing",
    message: "What are your instructions for testing?",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like this project to be covered under?",
    choices: ["MIT", "Apache", "GNU GPLv3", "ISC", "none"],
  },
  {
    type: "input",
    name: "gitName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];
