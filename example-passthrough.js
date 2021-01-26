const fs = require('fs');
const { PassThrough } = require("stream");

const pass = new PassThrough();

const readableStream = fs.createReadStream('./files/file2.txt');
const writableStream = fs.createWriteStream('./files/out2.txt');

pass.pipe(readableStream).pipe(writableStream);

