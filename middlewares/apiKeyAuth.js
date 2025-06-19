function apiKeyAuth(req, res, next){
    const auth = req.header('x-api-key')

    if (!auth) {
        return res.status(401).send('Autenticação requerida')
    }

    if (auth !== process.env.API_KEY) {
        return res.status(401).send('x-api-key inválida')
    }

    next()
}

module.exports = apiKeyAuth