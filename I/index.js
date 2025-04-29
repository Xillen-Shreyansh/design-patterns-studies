// Interface Segregation Principle

const OldPrinter = require('./machines/OldPrinter');
const MultiFunctionPrinter = require('./machines/MultiFunctionPrinter');

console.log("Old Printer:");
const oldPrinter = new OldPrinter();
oldPrinter.print("example.pdf");

console.log("\nMulti-Function Printer:");
const mfp = new MultiFunctionPrinter();
mfp.print("example1.pdf");
mfp.scan("example2.pdf");
mfp.fax("example3.pdf");
