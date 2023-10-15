//Q.1. Read the local directory and list all file names in it using JS.

const fs = require('fs');
const dirname = './dirname';
fs.readdir(dirname, (err, files) => {
  if (err) {
    console.error(err);
  }
  files.forEach((file) => {
    console.log(file);
  });
});
