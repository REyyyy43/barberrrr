const jwt = require('jsonwebtoken');

const userExtractor = async (request, response, next) => {
    try {
        const token = request.cookies?.accessToken;
        if (!token) {
            return response.status(401).send({ error: 'No se proporcionó un token de acceso.' });
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log(decoded);
        next();
    } catch (error) {
        return response.status(401).send({ error: 'Token inválido o expirado.' });
    }
};

module.exports = userExtractor;