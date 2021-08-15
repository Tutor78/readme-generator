// generates the badge for the license at the top of the readme
const generateBadge = license => {
  return '![badmath](https://img.shields.io/badge/License-${license}-informational)'
}

// function to generate the installation section
const generateInstallation = (confirmInstallation, installation) => {
  // checks if the user answered yes to having installation insctructions and if so adds an installation section
  if (confirmInstallation) {
    return `
## Installation

${installation}
    `
  } else {
    return '';
  }
};

// function to generate the contributions section
const generateAuthorSection = (confirmAuthor, authorName) => {
  // checks to see if the user wants to add extra authors
  if (authorName) {
    // seperates the string that the user inputs for contributors into an array
    const authorNameArr = authorName.split(', ');

    // sets the first four authors included into seperate variables
    const [first, second, third, fourth] = authorNameArr

    // checks to see if the user said that they wanted to add contributors
    if (confirmAuthor) {
      // depending on the number of contributors put in dynamically creates the readme information
      if (first && second && third && fourth){
        return `
## Credits

* ${first}
* ${second}
* ${third}
* ${fourth}
        `
      } else if (first && second && third && !fourth) {
        return `
## Credits

* ${first}
* ${second}
* ${third}
        `
      } else if (first && second && !third && !fourth) {
        return `
## Credits

* ${first}
* ${second}
        `
      } else if (first && !second && !third && !fourth) {
        return `
## Credits

* ${first}
        `
      }
    } else {
        return '';
    }
  } else {
    return '';
  }
};

// function to generate the license that the user picks
const generateLicense = license => {
  // sets the link for the MIT license if that's what the user chose
  if (license == 'MIT') {
    const licenseLink = 'https://choosealicense.com/licenses/mit/'

    return `
## License
    
This project is licensed under the [MIT](${licenseLink}) license.
    `
  } else if (license == 'GNU GPLv3') {
    // sets the GNU license and link if the user chose that
    const licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/'

    return `
## License
    
This project is licensed under the [GNU GPLv3](${licenseLink}) license.
    `
  }
};

// function to generate the languages used and framework
const generateLangFrame = (confirmFramework, languages, frameworks) => {
  // checks if the user wanted to add frameworks to the README
  if (confirmFramework) {
    // if the user didn't pick any languages then it only adds the framework section
    if (languages.length == 0 && frameworks.length > 0) {
      return `
## Frameworks

${frameworks.join(', ')}
      `;;;
    } else if (languages.length > 0 && frameworks.length > 0) {
      // if the user did pick languages it adds the language and framework sections
      return `
## Langauges

${languages.join(', ')}

## Framworks

${frameworks.join(', ')}
      `;
    } 
  } else if (languages.length > 0) {
    // if the user didn't choose to add frameworks but added languages it only adds that section
    return `
  ## Languages

  ${languages.join(', ')}
    `;
  } else {
    // if the user did not pick any languages or frameworks it doesn't add either
    return '';
  }
};

// function to generate the readme
const generateMarkdown = data => {
  // variables to hold all of the different inputs
  const {title, description, installation, instructions, authorName} = data;
  
  //  variables to hold the confirm information from the data set
  const {confirmInstallation, confirmAuthor, confirmFramework} = data;

  // variables to hold the arrays included in the dataset
  const {license, languages, frameworks} = data;

  // creates the markdown that will be used in the README
  return `
# ${title} ${generateBadge(license)}

## Description

${description}

${generateInstallation(confirmInstallation, installation)}

## Usage

${instructions}

${generateAuthorSection(confirmAuthor, authorName)}

${generateLicense(license)}

${generateLangFrame(confirmFramework, languages, frameworks)}
  `;
};

module.exports = generateMarkdown;
