const generateInstallation = (confirmInstallation, installation) => {
  if (confirmInstallation) {
    return `
## Installation

${installation}
    `
  } else {
    return '';
  }
};

const generateAuthorSection = (confirmAuthor, authorName) => {
  if (authorName) {
    const authorNameArr = authorName.split(', ');

    const [first, second, third, fourth] = authorNameArr

    if (confirmAuthor) {
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

const generateLicense = license => {
  if (license.length == 0) {
    return '';
  } else {
    return `
## License

This project is licensed under ${license}
    `
  }
}

const generateLangFrame = (confirmFramework, languages, frameworks) => {
  if (confirmFramework) {
    if (languages.length == 0 && frameworks.length > 0) {
      return `
## Frameworks

${frameworks.join(', ')}
      `
    } else if (languages.length > 0 && frameworks.length > 0) {
      return `
## Langauges

${languages.join(', ')}

## Framworks

${frameworks.join(', ')}
      `
    } 
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  // variables to hold all of the different inputs
  const {title, description, installation, instructions, authorName} = data;
  
  //  variables to hold the confirm information from the data set
  const {confirmInstallation, confirmAuthor, confirmFramework} = data;

  // variables to hold the arrays included in the dataset
  const {license, languages, frameworks} = data;

  return `
# ${title}

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
