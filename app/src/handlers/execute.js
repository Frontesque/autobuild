const { exec } = require("child_process");

module.exports = (cmd) => { 
    return new Promise((resolve, reject) => {

        //console.log("EXECUTING:".bgYellow.bold,cmd) // Debug
        exec(cmd, (error, stdout, stderr) => {
          if (error || stderr) reject(stderr || error);
          resolve(stdout);
        });
  

    });
};