let empresas = [];
let importaciones = [];
function mostrarEmpresas() {
  const listaEmpresas = document.getElementById('empresas-list');
  listaEmpresas.innerHTML = '';
  empresas.forEach((empresa) => {
    const elemento = document.createElement('li');
    elemento.textContent = empresa.nombre;
    listaEmpresas.appendChild(elemento);
  });
}
function mostrarImportaciones() {
  const listaImportaciones = document.getElementById('importaciones-list');
  listaImportaciones.innerHTML = '';
  importaciones.forEach((importacion) => {
    const elemento = document.createElement('li');
    elemento.textContent = `Empresa: ${importacion.empresa.nombre} - Producto: ${importacion.producto} - Cantidad: ${importacion.cantidad} - Valor: ${importacion.valor}`;
    listaImportaciones.appendChild(elemento);
  });
  listaImportaciones.style.display = 'block';
}
function mostrarImportacionesPorEmpresa() {
  const nombreEmpresa = prompt('Ingrese el nombre de la empresa');
  const empresa = empresas.find((empresa) => empresa.nombre === nombreEmpresa);
  if (empresa) {
    const listaImportacionesPorEmpresa = document.getElementById('importaciones-por-empresa-list');
    listaImportacionesPorEmpresa.innerHTML = '';
    empresa.importaciones.sort((a, b) => a.producto.localeCompare(b.producto)); // Ordenar por producto
    empresa.importaciones.forEach((importacion) => {
      const elementoLista = document.createElement('li');
      elementoLista.innerHTML = `
        ${importacion.producto}
        <ul>
          <li>Cantidad: ${importacion.cantidad}</li>
          <li>Valor: ${importacion.valor}</li>
        </ul>
      `;
      listaImportacionesPorEmpresa.appendChild(elementoLista);
    });
    listaImportacionesPorEmpresa.style.display = 'block';
  }
}
document.getElementById('mostrar-importaciones-por-empresa-btn').addEventListener('click', () => {
  const importacionesList = document.getElementById('importaciones-list');
  const importacionesPorEmpresaList = document.getElementById('importaciones-por-empresa-list');
  importacionesList.style.display = 'none';
  importacionesPorEmpresaList.style.display = 'block';
});
document.getElementById('agregar-empresa-btn').addEventListener('click', () => {
  const importacionesPorEmpresaList = document.getElementById('importaciones-por-empresa-list');
  importacionesPorEmpresaList.style.display = 'none';
});
document.getElementById('agregar-importacion-btn').addEventListener('click', () => {
  const importacionesPorEmpresaList = document.getElementById('importaciones-por-empresa-list');
  importacionesPorEmpresaList.style.display = 'none';
});
function agregarEmpresa() {
  const nombre = prompt('Ingrese el nombre de la empresa');
  if (nombre) {
    empresas.push({ nombre, importaciones: [] });
    mostrarEmpresas();
  }
}
function agregarImportacion() {
  const nombreEmpresa = prompt('Ingrese el nombre de la empresa');
  const empresa = empresas.find((empresa) => empresa.nombre === nombreEmpresa);
  if (empresa) {
    const producto = prompt('Ingrese el producto');
    const cantidad = parseInt(prompt('Ingrese la cantidad del producto'));
    const valor = parseFloat(prompt('Ingrese el valor del producto'));
    if (producto && cantidad && valor) {
      importaciones.push({ empresa, producto, cantidad, valor });
      empresa.importaciones.push({ producto, cantidad, valor });
      mostrarImportaciones();
    }
  }
}
document.getElementById('agregar-empresa-btn').addEventListener('click', agregarEmpresa);
document.getElementById('agregar-importacion-btn').addEventListener('click', agregarImportacion);
document.getElementById('mostrar-importaciones-por-empresa-btn').addEventListener('click', mostrarImportacionesPorEmpresa);
mostrarEmpresas();