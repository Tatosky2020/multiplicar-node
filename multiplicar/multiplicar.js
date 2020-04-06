/**
 * 
 */

// requires

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es número (base)`);
            return;
        }
        if (!Number(limite)) {
            reject(`${limite} no es número (limite)`);
            return;
        }

        console.log('=================='.green);
        console.log(` Tabla de ${base} `.green);
        console.log('=================='.green);

        let data = '';
        for (i = 1; i <= limite; i++) {
            //console.log(`${base} * ${i} =`, base * i);
            data += `${base} * ${i} = ${base * i}\n`;
        }
        resolve(data);
    })

}


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es número (base)`);
            return;
        }

        if (!Number(limite)) {
            reject(`${limite} no es número (limite)`);
            return;
        }

        let data = '';
        let fname = `tabla-${base}.txt`;
        let directorio = 'archivos';
        // crear dir si no existe
        fs.mkdir(directorio, { recursive: true }, (err) => {
            if (err) reject(err);
            return;
        });

        for (i = 1; i <= limite; i++) {
            //console.log(`${base} * ${i} =`, base * i);
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(directorio + '/' + fname, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(fname);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}