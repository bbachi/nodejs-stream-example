const fs = require('fs')

const readableStream = fs.createReadStream('./files/file1.txt');

readableStream.pipe(process.stdout);