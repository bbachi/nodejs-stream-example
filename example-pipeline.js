const fs = require('fs');
const { pipeline } = require('stream');

const readableStream = fs.createReadStream('./files/file1.txt');

const writableStream = fs.createWriteStream('./files/pipelineout.txt');

pipeline(
    readableStream,
    writableStream,
    (err) => {
        if (err) {
            console.error('Pipeline failed.', err);
        } else {
            console.log('Pipeline succeeded.');
        }
    }
);


