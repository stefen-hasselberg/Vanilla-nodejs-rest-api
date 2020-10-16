const fs = require('fs');

function writeDateToFile(fileName, content) {
  fs.writeFileSync(fileName, JSON.stringify(content), 'utf-8', (err) => {
    if (err) {
      console.log('error writing to file ', err);
    }
  });
}

exports.writeDataToFile = writeDateToFile;
