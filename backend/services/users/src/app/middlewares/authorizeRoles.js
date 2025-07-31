export default function authorizeRoles(...allowedRoles) {
    return (req, res, next) => {
        const userRole = req.user?.role
        
        if (!userRole) {
            return res.status(403).json({ error: 'Regra de acesso não encontrada' })
        }

        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({ error: 'Acesso não autorizado para esta função' })
        }

        next()
    }
}