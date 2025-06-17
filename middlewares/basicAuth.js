

function basicAuth(req, res, next) {
    const auth = req.headers['authorization']

    if (!auth || !auth.startsWith('Basic ')) {
        return res.status(401).send('Autenticação requerida')
    }

    const base64Credentials = auth.split(" ")[1]
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf8')

    const [usuario, senha] = credentials.split(":")

    const usuarioValido = usuario === process.env.BASIC_USER
    const senhaValida = senha === process.env.BASIC_PASS

    if (!usuarioValido || !senhaValida) {
        return res.status(401).send('Credenciais Inválidas')
    }



    next()
}

module.exports = basicAuth
