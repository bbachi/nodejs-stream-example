const fs = require('fs')

const readableStream = fs.createReadStream('./files/file1.txt');

readableStream.on('data', (data) => {
    console.log('Received Data ', data.toString());
});

readableStream.on('end', () => {
    console.log('End of file reached!!!');
})