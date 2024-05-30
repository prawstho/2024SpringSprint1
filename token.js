const fs = require('fs');

const myArgs = process.argv.slice(2);

function tokenApplication() {
  if(DEBUG) console.log('tokenApplication()');

  switch (myArgs[1]) {
  case '--count':
    if(DEBUG) console.log('--count');
    break;
  case '--list':
    if(DEBUG) console.log('--list');
    break; 
  case '--new':
    if(DEBUG) console.log('--new');
    break;
  case '--help':
  case '--h':
  default:
      fs.readFile(__dirname + "/usage.txt", (error, data) => {
          if(error) throw error;              
          console.log(data.toString());
      });
  }
}

module.exports = {
  tokenApplication,
}