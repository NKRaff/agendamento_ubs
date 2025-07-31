export default (req, res, next) => {
    // Responder erros de forma padronizada
    res.error = (status, message) => {
        res.status(status).json({ error: message })
    }
    // Capturar erros não tratados
    res.on('error', (err) => {
        console.error(err)
        res.error(500, 'Erro interno do servidor')
    })
    next()
}
