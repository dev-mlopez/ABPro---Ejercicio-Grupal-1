export default class Empresa {
    static contadorId = 0;

    constructor(nombre, rut) {
        this.idRegistro = Empresa.contadorId++;
        this.nombre = nombre;
        this.rut = rut;
        this.importaciones = [];
    }

    getIdRegistro() { return this.idRegistro }
    setIdRegistro(idRegistro) { this.idRegistro = idRegistro }

    getNombre() { return this.nombre }
    setNombre(nombre) { this.nombre = nombre }

    getRut() { return this.rut }
    setRut(rut) { this.rut = rut }

    registrarImportacion(importacion) {
        this.importaciones.push(importacion);
        // console.log(importacion)
    }

    obtenerTotalImportaciones() {
        return this.importaciones.reduce((total, importacion) => total + importacion.obtenerCostoTotal(), 0)
    }
}