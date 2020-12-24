const fs = require('fs')
let listadoPorhacer = [];

const cargar = () => {
    try {
        listadoPorhacer = require('../db/data.json');
    } catch (error) {
        listadoPorhacer = [];
    }
}

const guardarDB = () => {
    const datos = JSON.stringify(listadoPorhacer);

    const da = new Uint8Array(Buffer.from(datos));
    fs.writeFile(`db/data.json`, da, (err) => {
        if (err) throw new Error(' No se pudo grabar ', err);
    });
}

const crear = (descripcion) => {
    cargar();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorhacer.push(porHacer);
    guardarDB();
    return porHacer;

}
const getlistado = () => {
    cargar();
    return listadoPorhacer;
}
const actualizar = (descripcion, completado = true) => {
    cargar();
    let index = listadoPorhacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    if (index >= 0) {
        listadoPorhacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;

    }
}
const borrar = (descripcion) => {
    cargar();
    let nuevolistado = listadoPorhacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });
    if (listadoPorhacer.length === nuevolistado.length) {
        return false;
    } else {
        listadoPorhacer = nuevolistado;
        guardarDB();
        return true;
    }

}
module.exports = {
    crear,
    getlistado,
    actualizar,
    borrar
}