const Clientes = require('../models/Clientes');


// Agrega un nuevo cliente
exports.nuevoCliente = async (req, res,nrxt) => {
    const cliente = new Clientes(req.body);
    console.log(cliente.nombre);
    console.log(cliente.empresa);

    try {
        // Almacenar el registro
        await cliente.save();
        res.json({ mensaje : 'Se agrego un nuevo cliente'});
    } catch (error) {
        // Si hay un error console.log y next
       res.send(error);
        next();
    }
}



// muestra todos los clientes
exports.mostrarClientes = async (req, res, next) => {

    try {
        const clientes = await Clientes.find({});
        res.json(clientes);
    } catch (error) {
        console.log('ESTE ES EL ERROR MEN:  ',error);
        next();
    }

}

// muestra un cliente por su id
exports.mostrarCliente = async (req, res, next) => {
    const cliente = await Clientes.findById(req.params.idCliente);

    if(!cliente) {
        res.json({ mensaje: 'Cliente no encontrado'});
        next()
    }

    // mostrar cliente
    res.json(cliente);
}

// Actualiza un cliente por su id
exports.actualizarCliente = async (req, res, next) => {
    try {

        const cliente = await Clientes.findOneAndUpdate({ _id: req.params.idCliente },
            req.body, {
                new: true // decimos que nos traiga el nuevo registro
            })

            res.json(cliente);

    } catch (error) {
       res.send(error);
        next();
    }
}

// Eliminar Cliente por su id
exports.eliminarCliente = async (req, res, next) => {
    try {
        await Clientes.findOneAndDelete({_id : req.params.idCliente});
        res.json({ mensaje : 'El cliente ha sido eliminado correctamente'});
    } catch (error) {
        console.log(error);
        next();
    }
}