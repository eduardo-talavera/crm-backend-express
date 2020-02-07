const express = require('express');
const router = express.Router();

const clientesController = require('../controllers/clientesController');
const productosController = require('../controllers/productosController');
const pedidosController = require('../controllers/pedidosController');
const usuariosController = require('../controllers/usuariosController');

// middleware para proteger las rutas
const auth = require('../middlewares/auth');


module.exports = function() {

    /**----------------------------------
     *            CLIENTES
     -----------------------------------*/
  
  
    //Agrega nuevos clientes via post
    router.post('/clientes',
     clientesController.nuevoCliente
     );

    //Obtener todos los clientes
    router.get('/clientes',
     auth,
     clientesController.mostrarClientes
     );

    // muestra un cliente en especifico (ID)
    router.get('/clientes/:idCliente', clientesController.mostrarCliente);

    // actualizar cliente
    router.put('/clientes/:idCliente', clientesController.actualizarCliente);

    // Eliminar Cliente por su id
    router.delete('/clientes/:idCliente', clientesController.eliminarCliente);




    /**----------------------------------
     *            PRODUCTOS
     -----------------------------------*/

    // Nuevos productos 
    router.post('/productos',
            productosController.subirArchivo,
            productosController.nuevoProducto
    );

    // Muestra todos los productos
    router.get('/productos', productosController.mostrarProductos);

    // Muestra un producto por su id
    router.get('/productos/:idProducto', productosController.mostrarProducto);

    // Actualizar Productos
    router.put('/productos/:idProducto',
        productosController.subirArchivo,
        productosController.actualizarProducto
    );

    // Eliminar Productos
    router.delete('/productos/:idProducto', productosController.eliminarProducto);

    // Busqueda de productos
    router.post('/productos/busqueda/:query', productosController.buscarProducto);


     /**----------------------------------
     *            PEDIDOS
     -----------------------------------*/

     // Agrega nuevos pedidos
     router.post('/pedidos/nuevo/:idUsuario', pedidosController.nuevoPedido);

     // Mostrar todos los pedidos
     router.get('/pedidos', pedidosController.mostrarPedidos);

     // Mostrar un pedido por su id
     router.get('/pedidos/:idPedido', pedidosController.mostrarPedido);

     // Actualizar pedido por id
     router.put('/pedidos/:idPedido', pedidosController.actualizarPedido);

     // Eliminar pedidos
     router.delete('/pedidos/:idPedido', pedidosController.eliminarPedido);

       /**----------------------------------
     *            USUARIOS
     -----------------------------------*/
     router.post('/crear-cuenta',
      usuariosController.registrarUsuario
     );

     router.post('/iniciar-sesion',
        usuariosController.autenticarUsuario
     );



    return router;
}