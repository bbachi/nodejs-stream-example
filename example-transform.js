const { Transform } = require("stream");

const myTransForm = new Transform({

    transform(chunk, encoding, callback) {
        const data = chunk.toString().toUpperCase();
        callback(null, data);
    }
})

myTransForm.on('data', (data) => {
    console.log('Received Data ', data.toString());
});

myTransForm.on('end', () => {
    console.log('End of file reached!!!');
})

myTransForm.on('finish', () => {
    console.log('Writing Done!!!');
})

myTransForm.write("This is the stream data 1\n");
myTransForm.write("This is the stream data 2\n");
myTransForm.write("This is the stream data 3\n");

myTransForm.end("Done!!!!");