// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const readmeQuestions = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the name of your application?',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log('You must include a name for you application!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Write a description of your application:',
                validate: descriptionInput => {
                    if(descriptionInput) {
                        return true;
                    } else {
                        console.log('You must provide a description of your application!');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmTableOfContents',
                message: 'Do you need to include a table of contents?',
                default: false
            },
            {
                type: 'confirm',
                name: 'confirmInstallation',
                message: 'Would you like to add an installation guide for your application?',
                default: false
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the installation instructions?',
                when: ({ confirmInstallation }) => {
                    if(confirmInstallation) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'instructions',
                message: 'What are the instructions to use your application?',
                validate: instructionInput => {
                    if (instructionInput) {
                        return true;
                    } else {
                        console.log('You need to provide instructions to use your application!');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'screenshot',
                message: 'Would you like to include a screenshot in your application?',
                default: false
            },
            {
                type: 'confirm',
                name: 'confirmAuthor',
                message: 'Are there any other Authors for the application besides yourself?',
                default: false
            },
            {
                type: 'input',
                name: 'authorName',
                message: 'List your collaborators seperated by commas:',
                when: ({confirmAuthor}) => {
                    if (confirmAuthor) {
                        return true;
                    } else {
                        return false;
                    }
                } 
            },
            {
                type: 'checkbox',
                name: 'license',
                message: 'Which license would you like to use for this application?',
                choices: ['MIT', 'GNU GPLv3']
            },
            {
                type: 'checkbox',
                name: 'languages',
                message: 'What languages did you use in this project?',
                choices: ['HTML', 'Javascript', 'CSS']
            },
            {
                type: 'confirm',
                name: 'confirmBadges',
                message: 'Would you like to include badges for your languages used?',
                default: false
            },
            {
                type: 'confirm',
                name: 'confirmFramework',
                message: 'Did you use any frameworks for this application?',
                default: false
            },
            {
                type: 'checkbox',
                name: 'frameworks',
                message: 'What frameworks did you use?',
                choices: ['Bootstrap', 'jQuery', 'node'],
                when: ({ confirmFramework }) => {
                    if (confirmFramework) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ])
        .then(answers => {
            console.log(answers);
        });
    };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
