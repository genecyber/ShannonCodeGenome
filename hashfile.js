// generate a hash from file stream
    var crypto = require('crypto'),
        fs = require('fs'),
		filename="genome_shannon_code_Full_20150416093723.txt"

    // open file stream
    var fstream = fs.createReadStream(filename);
    var hash = crypto.createHash('sha256')
    hash.setEncoding('hex')

    // once the stream is done, we read the values
    fstream.on('end', function() {
        hash.end()
        // print result
		var theHash = hash.read()
        console.log(theHash)
		var stream = fs.createWriteStream(filename.replace('.txt','.'+theHash))
    });

    // pipe file to hash generator
    fstream.pipe(hash);