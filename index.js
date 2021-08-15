// packages required for the application to work
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeFile = require('./utils/writeFile.js');

// inquirer questions for the user to respond to
const readmeQuestions = () => {
    return inquirer.prompt([
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
                message: 'Write a brief description of your application:',
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
                name: 'confirmInstallation',
                message: 'Would you like to add an installation guide for your application?',
                default: true
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
                name: 'confirmAuthor',
                message: 'Are there any other Authors for the application besides yourself?',
                default: true
            },
            {
                type: 'input',
                name: 'authorName',
                message: 'List up to four collaborators seperated by a comma and a space:',
                when: ({confirmAuthor}) => {
                    if (confirmAuthor) {
                        return true;
                    } else {
                        return false;
                    }
                } 
            },
            {
                type: 'list',
                name: 'license',
                message: 'Which license would you like to use for this application?',
                choices: ['MIT', 'GNU GPLv3'],
                default: 'MIT'
            },
            {
                type: 'checkbox',
                name: 'languages',
                message: 'What languages did you use in this project?',
                choices: ['HTML', 'Javascript', 'CSS']
            },
            {
                type: 'confirm',
                name: 'confirmFramework',
                message: 'Did you use any frameworks for this application?',
                default: true
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
            },
            {
                type: 'confirm',
                name: 'confirmTests',
                message: 'Do you have any test for this application?',
                default: true
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Explain any tests for your application:',
                when: ({ confirmTests }) => {
                    if (confirmTests) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('You must enter your GitHub username!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email so that people can contact you: ',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ]);
    };

const mockData = 
    {
        title: 'Run Buddy',
        description: 'lorem ipsum dolores something something dark side yada yada yada',
        confirmInstallation: true,
        installation: 'No real instructions for installation check back later',
        instructions: 'Just scroll up and down and click some buttons. But most importantly have fun!',
        confirmAuthor: false,
        authorName: 'Steve Stevenson, Jack Jackinson, Kathy Beedy, Steph Curringtonton',
        license: 'MIT',
        languages: [],
        // languages: ['HTML', 'CSS'],
        confirmFramework: false,
        frameworks: ['Bootstrap'],
        confirmTests: true,
        tests: 'Not really any tests as this is just a static website',
        github: 'Tutor78',
        email: 'tutor.michael78@gmail.com'
    }

// init function that holds the main logic for the application to work
const init = () => {
    readmeQuestions()
        .then(answers => generateMarkdown(answers))
        .then(readmeInfo => writeFile(readmeInfo))
        .then(writeFileResponse => console.log(writeFileResponse.message))
        .catch(err => console.log(err));
}

// Function call to initialize app
// init();

writeFile(generateMarkdown(mockData))
    .then(writeFileResponse => console.log(writeFileResponse.message))
    .catch(err => console.log(err));