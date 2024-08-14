
class Empresa {
    constructor(id, nombre, rut) {
        this.id = id;
        this.nombre = nombre;
        this.rut = rut;
        this.importaciones = [];
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
    }

    // Método para calcular el total de importaciones
    sumaTotalImportaciones() {
        return this.importaciones.length;
    }

    // Método para calcular el costo total de las importaciones
    sumaTotalPorProductos() {
        return this.importaciones.reduce((total, importacion) => 
            total + (importacion.numeroProductos * importacion.precioUnitario), 0);
    }
}

// Clase Importacion
class Importacion {
    constructor(id, producto, numeroProductos, precioUnitario) {
        this.id = id;
        this.producto = producto;
        this.numeroProductos = numeroProductos;
        this.precioUnitario = precioUnitario;
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
}

const empresa1 = new Empresa(1, "Empresa A", "12345678-9");
const importacion1 = new Importacion(1, "Producto A", 100, 50);
const importacion2 = new Importacion(2, "Producto B", 200, 30);


empresa1.agregarImportacion(importacion1);
empresa1.agregarImportacion(importacion2);


console.log("Total de importaciones: " + empresa1.sumaTotalImportaciones());
console.log("Total por productos: " + empresa1.sumaTotalPorProductos());
