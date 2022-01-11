const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base, listar, hasta ) => {
    let salida = '';
    let name = `tabla-${base}.txt`;
    console.log("hasta", hasta);
    try {
        for (let i=1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base*i} \n`;
        }
        
        if(listar){
            console.log(colors.green("====================="));
            console.log(colors.green(`==== TABLA DE: ${base} ====`));
            console.log(colors.green("====================="));
            console.log(colors.yellow(salida));
        }

        fs.writeFileSync(`./salida/${name}`, salida);
    
        return name;
    } catch (error) {
        throw error;
    }

};

module.exports = {
    crearArchivo
}