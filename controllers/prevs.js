const prevsRouter = require('express').Router();
const User = require('../models/user');

prevsRouter.get('/', async (request, response) => {
    try {
        // Realizar la búsqueda de usuarios
        const user = request.user;
        const prevs = await User.find({ user: user.id });

        // Enviar respuesta con los resultados
        return response.status(200).json(prevs);
    } catch (error) {
        // Manejar cualquier error que ocurra durante la búsqueda
        console.error('Error al buscar usuarios:', error);
        return response.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = prevsRouter; 