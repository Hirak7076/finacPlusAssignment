const fs = require('fs');

class FileUtil {

    static writeBookDetails(bookDetails) {

        const content =

`Title      : ${bookDetails.title}

Author     : ${bookDetails.author}

Publisher  : ${bookDetails.publisher}`;

        fs.writeFileSync(
            'output/bookDetails.txt',
            content
        );

        console.log(
            'Book details written successfully'
        );
    }
}

module.exports = FileUtil;