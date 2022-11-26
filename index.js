const invokeAction = require("./contacts");
const { program } = require("commander");

program
    .option("-a, --action <type>", "contacts operation")
    .option("-i, --id <type>", "contacts id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

invokeAction(argv);
    