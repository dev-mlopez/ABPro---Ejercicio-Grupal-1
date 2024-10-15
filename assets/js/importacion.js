// import Empresa from "./empresa";

export default class Importacion {
    static contadorId = 0;

    constructor(producto, numeroProductos, precioUnitario) {
        // super(nombre);
        this.idImportacion = Importacion.contadorId++;
        this.producto = producto;
        this.numeroProductos = numeroProductos;
        this.precioUnitario = precioUnitario;
    }

    getIdImportacion() { return this.idImportacion }
    setIdImportacion(idImportacion) { this.idImportacion = idImportacion }

    getProducto() { return this.producto }
    setProducto(producto) { this.producto = producto }

    getNumeroProductos() { return this.numeroProductos }
    setNumeroProductos(numeroProductos) { this.numeroProductos = numeroProductos }

    getPrecioUnitario() { return this.precioUnitario }
    setPrecioUnitario(precioUnitario) { this.precioUnitario = precioUnitario }

    obtenerCostoTotal() {
        return this.numeroProductos * this.precioUnitario;
    }
}