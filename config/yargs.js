const argv = require("yargs")
    .option({
        "b": {
            alias: "base",
            type: 'number',
            demandOption: true,
            describe: "base a multiplicar"
        },
        "l": {
            alias: "listar",
            type: 'boolean',
            default: false,
            describe: "Muestra la tabla en consola"
        },
        "h": {
            alias: "hasta",
            type: 'number',
            demandOption: true,
            describe: "Alcance de la tabla"
        }
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw "la base debe ser un numero";
        }

        if(isNaN(argv.h)){
            throw "la base debe ser un numero";
        }

        return true;
    })
    .argv;

module.exports = argv;