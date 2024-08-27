// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
       
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['None', 'Apache 2.0', 'MIT', 'GPL v3.0'],
        
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a project description',
       
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps are needed to install your project?',
     
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use of your project?',
        
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What guidelines must others follow in order to contribute?',
       
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test this project?',
      
        
    },
    {
        type: 'input',
        name: 'askMe',
        message: 'What is your Github username so others can reach you for questions?',
        
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email so there is another way to be reached for questions?',
        
    }
];





function writeFile(fileContent) {
    fs.appendFile('./generatedREADME.md', `${fileContent}\n`, (err) => 
       
        err ? console.error(err) : console.log('README initializing...')
)};

// function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            console.log(answer);
        var fileContent = generateMarkdown(answer);
        writeFile(fileContent)
        });
}


init();
