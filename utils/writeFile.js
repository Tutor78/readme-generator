const fs = require('fs');

// function to write a new README file into the dist folder using a promise
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'README generated in the dist folder!'
            });
        });
    });
};

module.exports = writeFile;