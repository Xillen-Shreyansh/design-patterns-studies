const Printable = require('../interfaces/Printable');

class OldPrinter extends Printable {
    print(document) {
        console.log(`Printing document: ${document}`);
    }
}

module.exports = OldPrinter;
