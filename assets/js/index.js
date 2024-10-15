import Importacion from "./importacion.js";
import Empresa from "./empresa.js"

const d = document;

let empresasDefecto = [
        {
            idRegistro: 0,
            nombre: "Lider",
            rut: "202"
        },
        {
            idRegistro: 1,
            nombre: "Tottus",
            rut: "20-4"
        },
        {
            idRegistro: 2,
            nombre: "Santa Isabel",
            rut: "903-6"
        },
        {
            idRegistro: 3,
            nombre: "Jumbo",
            rut: "145-3"
        },
        {
            idRegistro: 4,
            nombre: "Mercado Libre",
            rut: "248"
        },
    ],
    importacionesDefecto = [
        {
            nombreEmpresa: "Lider",
            producto: "Leche",
            numeroProductos: 9,
            precioUnitario: 950
        },
        {
            nombreEmpresa: "Santa Isabel",
            producto: "Arroz",
            numeroProductos: 5,
            precioUnitario: 900
        },
        {
            nombreEmpresa: "Tottus",
            producto: "Fideos",
            numeroProductos: 4,
            precioUnitario: 800
        },
        {
            nombreEmpresa: "Lider",
            producto: "Arroz",
            numeroProductos: 4,
            precioUnitario: 1150
        },
        {
            nombreEmpresa: "Mercado Libre",
            producto: "Bicicleta",
            numeroProductos: 7,
            precioUnitario: 300000
        },
    ],
    empresas = [],
    importaciones = [];

function agregarEmpresa(empresa) {
    empresas.push(empresa);
    mostrarEmpresas();
}

function buscarEmpresaPorNombre(nombre) {
    return empresas.find(empresa => empresa.nombre === nombre);
}

function agregarImportacion(nombreEmpresa, importacion) {
    importaciones.push({nombreEmpresa, importacion});
    let empresa = buscarEmpresaPorNombre(nombreEmpresa)
    empresa.registrarImportacion(importacion);
    mostrarImportaciones();
}

// DOM
function mostrarEmpresas() {
    const listaEmpresas = d.getElementById("empresasLista");
    listaEmpresas.innerHTML = '';
    const cabeceraTabla = d.createElement("tr");
    cabeceraTabla.innerHTML = `
        <th>ID</th>
        <th>Nombre</th>
        <th>Rut</th>
    `
    listaEmpresas.appendChild(cabeceraTabla);
    empresas.forEach((empresa => {
        const datosEmpresa = d.createElement("tr");
        datosEmpresa.innerHTML = `
            <td>${empresa.getIdRegistro()}</td>
            <td>${empresa.getNombre()}</td>
            <td>${empresa.getRut()}</td>
        `
        listaEmpresas.appendChild(datosEmpresa);
    }))
}

function mostrarImportaciones() {
    const listaImportaciones = d.getElementById("importacionesLista");
    listaImportaciones.innerHTML = "";
    const cabeceraTabla = d.createElement("tr");
    cabeceraTabla.innerHTML = `
        <th>Empresa</th>
        <th>Producto</th>
        <th>Cantidad</th>
        <th>Valor por Unidad</th>
        <th>Valor por Cantidad</th>
    `
    listaImportaciones.appendChild(cabeceraTabla);
    importaciones.forEach((importacion) => {
        const datosImportacion = d.createElement("tr");
        datosImportacion.innerHTML = `
            <td>${importacion.nombreEmpresa}</td>
            <td>${importacion.importacion.producto}</td>
            <td>${importacion.importacion.numeroProductos}</td>
            <td>$${importacion.importacion.precioUnitario}</td>
            <td>$${importacion.importacion.obtenerCostoTotal()}</td>
        `
        listaImportaciones.appendChild(datosImportacion);
    })
}

function registrarEmpresa() {
    const nombreEmpresa = d.getElementById("nombreEmpresa").value,
        rutEmpresa = d.getElementById("rutEmpresa").value;

    const empresa = new Empresa(nombreEmpresa, rutEmpresa);
    agregarEmpresa(empresa);
}

function registrarImportacion() {
    const nombreEmpresaRegistrada = d.getElementById("nombreEmpresaRegistrada").value,
        nombreProducto = d.getElementById("nombreProducto").value,
        numeroProductos = d.getElementById("cantidadProductos").value,
        precioUnitario = d.getElementById("precioUnitario").value;

    const empresa = buscarEmpresaPorNombre(nombreEmpresaRegistrada);
    if(empresa) {
        const importacion = new Importacion(nombreProducto, numeroProductos, precioUnitario);
        agregarImportacion(nombreEmpresaRegistrada, importacion);
    } else {
        alert(`La empresa ${nombreEmpresaRegistrada} no existe.`)
    }
}

d.getElementById("agregar-empresa-btn").addEventListener("click", () => {
    registrarEmpresa();
})

d.getElementById("agregar-importacion-btn").addEventListener("click", () => {
    registrarImportacion();
})

d.getElementById("mostrarImportacionesPorEmpresaBtn").addEventListener("click", () => {
    obtenerNombreEmpresa();
})

empresasDefecto.forEach((empresa) => {
    const nuevaEmpresa = new Empresa(empresa.nombre, empresa.rut)
    agregarEmpresa(nuevaEmpresa);
})

importacionesDefecto.forEach((importacion) => {
    const nuevaImportacion = new Importacion(importacion.producto, importacion.numeroProductos, importacion.precioUnitario);
    agregarImportacion(importacion.nombreEmpresa, nuevaImportacion);
})

function obtenerNombreEmpresa() {
    const nombreEmpresa = d.getElementById("filtrarPorNombreEmpresa").value;
    let empresa = buscarEmpresaPorNombre(nombreEmpresa);

    if(empresa) {
        mostrarImportacionesPorEmpresa(empresa)
    } else {
        alert(`La empresa ${nombreEmpresa} no existe`);
    }
}

function mostrarImportacionesPorEmpresa(empresa) {
    const listaImportacionesPorEmpresa = d.getElementById("importacionesLista");
    listaImportacionesPorEmpresa.innerHTML = "";
    const cabeceraTabla = d.createElement("tr");
    cabeceraTabla.innerHTML = `
        <th>Empresa</th>
        <th>Producto</th>
        <th>Cantidad</th>
        <th>Valor por Unidad</th>
        <th>Valor por Cantidad</th>
    `
    listaImportacionesPorEmpresa.appendChild(cabeceraTabla);
    empresa.importaciones.forEach((importacion) => {
        const datosImportacion = d.createElement("tr");
        datosImportacion.innerHTML = `
            <td>${empresa.getNombre()}</td>
            <td>${importacion.producto}</td>
            <td>${importacion.numeroProductos}</td>
            <td>$${importacion.precioUnitario}</td>
            <td>${importacion.obtenerCostoTotal()}</td>
        `
        listaImportacionesPorEmpresa.appendChild(datosImportacion);
    })
    const pieTabla = d.createElement("tr");
    pieTabla.innerHTML = `
        <th colspan="4">Total</th>
        <td>$${empresa.obtenerTotalImportaciones()}</td>
    `
    listaImportacionesPorEmpresa.appendChild(pieTabla)
}
