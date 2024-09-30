const empresas = [];

        function registrarEmpresa() {
            const id = document.getElementById('empresa_id').value;
            const nombre = document.getElementById('empresa_nombre').value;
            const rut = document.getElementById('empresa_rut').value;

            const nuevaEmpresa = new Empresa(id, nombre, rut);
            empresas.push(nuevaEmpresa);

            const select = document.getElementById('empresa_select');
            const option = document.createElement('option');
            option.value = id;
            option.textContent = nombre;
            select.appendChild(option);

            alert(`Empresa ${nombre} registrada correctamente.`);
            document.getElementById('empresa_id').value = '';
            document.getElementById('empresa_nombre').value = '';
            document.getElementById('empresa_rut').value = '';
        }

        function registrarImportacion() {
            const id = document.getElementById('importacion_id').value;
            const producto = document.getElementById('importacion_producto').value;
            const cantidad = parseInt(document.getElementById('importacion_cantidad').value);
            const precioUnitario = parseFloat(document.getElementById('importacion_precio').value);
            const empresaId = document.getElementById('empresa_select').value;

            const importacion = new Importacion(id, producto, cantidad, precioUnitario);
            const empresa = empresas.find(emp => emp.id === empresaId);
            empresa.agregarImportacion(importacion);

            const totalImportaciones = empresa.sumaTotalImportaciones();
            const totalProductos = empresa.sumaTotalProductos();

            document.getElementById('total_importaciones').textContent = `Total de Importaciones: $${totalImportaciones}`;
            document.getElementById('total_productos').textContent = `Total de Productos: ${totalProductos}`;

            alert(`Importación de ${producto} registrada correctamente.`);
            document.getElementById('importacion_id').value = '';
            document.getElementById('importacion_producto').value = '';
            document.getElementById('importacion_cantidad').value = '';
            document.getElementById('importacion_precio').value = '';
        }

        
        class Empresa {
            constructor(id, nombre, rut) {
                this._id = id;
                this._nombre = nombre;
                this._rut = rut;
                this._importaciones = [];
            }

            
            get id() {
                return this._id;
            }

            set id(value) {
                this._id = value;
            }

            get nombre() {
                return this._nombre;
            }

            set nombre(value) {
                this._nombre = value;
            }

            get rut() {
                return this._rut;
            }

            set rut(value) {
                this._rut = value;
            }

            get importaciones() {
                return this._importaciones;
            }

            
            agregarImportacion(importacion) {
                this._importaciones.push(importacion);
            }

            sumaTotalImportaciones() {
                return this._importaciones.reduce((total, imp) => total + (imp.cantidad * imp.precioUnitario), 0);
            }

            sumaTotalProductos() {
                return this._importaciones.reduce((total, imp) => total + imp.cantidad, 0);
            }
        }

        class Importacion {
            constructor(id, producto, cantidad, precioUnitario) {
                this._id = id;
                this._producto = producto;
                this._cantidad = cantidad;
                this._precioUnitario = precioUnitario;
            }

          
            get id() {
                return this._id;
            }

            set id(value) {
                this._id = value;
            }

            get producto() {
                return this._producto;
            }

            set producto(value) {
                this._producto = value;
            }

            get cantidad() {
                return this._cantidad;
            }

            set cantidad(value) {
                this._cantidad = value;
            }

get precioUnitario() {
    return this._precioUnitario;
}

set precioUnitario(value) {
    this._precioUnitario = value;
}
}
