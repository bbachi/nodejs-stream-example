const fs = require('fs');

const writableStream = fs.createWriteStream('./files/out.txt');

writableStream.write("This is dummy text1!!");
writableStream.write("\n");
writableStream.write("This is dummy text2!!");
writableStream.write("\n");
writableStream.write("This is dummy text3!!");
writableStream.write("\n");

writableStream.end('Done!!');