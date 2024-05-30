const fs = require('fs');
const myArgs = process.argv.slice(2);

function configApplication() {
  if(DEBUG) console.log('configApplication()');

  switch (myArgs[1]) {
  case '--show':
      if(DEBUG) console.log('--show');
      break;
  case '--reset':
      if(DEBUG) console.log('--reset');
      break;
  case '--set':
      if(DEBUG) console.log('--set');
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
  configApplication,
}