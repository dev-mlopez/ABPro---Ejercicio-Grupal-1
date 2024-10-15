class Importacion {
  constructor(idImportacion, producto, numeroProductos, precioUnitario) {
    this.idImportacion = idImportacion;
    this.producto = producto;
    this.numeroProductos = numeroProductos;
    this.precioUnitario = precioUnitario;
  }
  getIdImportacion() {
    return this.idImportacion;
  }
  setIdImportacion(idImportacion) {
    this.idImportacion = idImportacion;
  }
  getProducto() {
    return this.producto;
  }
  setProducto(producto) {
    this.producto = producto;
  }
  getNumeroProductos() {
    return this.numeroProductos;
  }
  setNumeroProductos(numeroProductos) {
    this.numeroProductos = numeroProductos;
  }
  getPrecioUnitario() {
    return this.precioUnitario;
  }
  setPrecioUnitario(precioUnitario) {
    this.precioUnitario = precioUnitario;
  }
  getPrecioTotal() {
    return this.numeroProductos * this.precioUnitario;
  }
}
export default Importacion;