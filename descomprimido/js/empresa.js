class Empresa {
  constructor(idRegistro, nombre, rut) {
    this.idRegistro = idRegistro;
    this.nombre = nombre;
    this.rut = rut;
    this.importaciones = [];
    this.totalImportaciones = 0;
  }
  getIdRegistro() {
    return this.idRegistro;
  }
  setIdRegistro(idRegistro) {
    this.idRegistro = idRegistro;
  }
  getNombre() {
    return this.nombre;
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }
  getRut() {
    return this.rut;
  }
  setRut(rut) {
    this.rut = rut;
  }
  agregarImportacion(importacion) {
    this.importaciones.push(importacion);
    this.totalImportaciones += importacion.getPrecioTotal();
  }
  getTotalImportaciones() {
    return this.totalImportaciones;
  }
}
export default Empresa;