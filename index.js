// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a short description of this project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "What should this project be used for?",
  },
  {
    type: "input",
    name: "license",
    message: "What is the license required for this project?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the contribution guidelines?",
  },
  {
    type: "input",
    name: "test",
    message: "What are the testing instructions?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("ReadMe Created!");
    }
  });
}

function generateReadmeContent(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.test}
`;
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = generateReadmeContent(answers);
      writeToFile("README.md", readmeContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();
