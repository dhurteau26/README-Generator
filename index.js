// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
inquirer.prompt([
    {   name: 'name',
        type: 'input',
        message: 'What is the name of your project?'

    },
    {
        name: 'description',
        type: 'input',
        message: 'Write a short description explaining the what, why and how of your project.',
    },
    {
        name: 'install',
        type: 'input',
        message: 'What are the steps required to install your project?',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.'
    },
    {
        name: 'credits',
        type: 'input',
        message: 'List your collaborators, if any, with links to their Github profiles.'
    },
    {
        name: 'license',
        type: 'input',
        message: 'Iclude a lisence in the last section of the README.'
    }

]).then((answers) => {
    const userTemplate = fillTemplate(answers);
    writeFile(userTemplate);
});

function fillTemplate(answers) {
    return 
`# <Project Title>
${answers.name}

## Description
${answers.description}


## Installation
${answers.install}


## Usage
${answers.usage}

## Credits
${answers.credits}

## License
${answers.license}`
}

// TODO: Create a function to write README file
function writeFile(readMe) {
    fs.writeFile('README.md', readMe, (err)=> {
        if (err) {
            console.error("Error writing file: ", err);
        } else {
            console.log("README.md created!")
        }
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
