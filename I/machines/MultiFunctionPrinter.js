const Printable = require('../interfaces/Printable');
const Scannable = require('../interfaces/Scannable');
const Faxable = require('../interfaces/Faxable');

class MultiFunctionPrinter extends Printable {
    constructor() {
        super();
        this.scanner = new Scannable();
        this.faxer = new Faxable();
    }

    print(document) {
        console.log(`Printing: ${document}`);
    }

    scan(document) {
        console.log(`Scanning: ${document}`);
    }

    fax(document) {
        console.log(`Faxing: ${document}`);
    }
}

module.exports = MultiFunctionPrinter;
