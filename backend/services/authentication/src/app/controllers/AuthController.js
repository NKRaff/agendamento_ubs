import AuthService from "../services/AuthService.js"

export default new class AuthController {

    async login(req, res) {
        try {
            const result = await AuthService.login(req.body)
            
            if(result.error)
                return res.status(400).json({error: result.error})

            const token = result.token
            const rule = result.rule
            
            if (!token) {
                return res.status(500).json({ error: "Token não gerado" });
            }

            return res.status(200).json({token: token})
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async createAuth(req, res) {
        try {
            const auth = await AuthService.createAuth(req.body)
            return res.status(201).json(auth)
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async logout(req, res) {
        // Armazena o token no Cookie
        res.cookie('token', '', {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
            expires: new Date(0) // Expira imediatamente
        })

        return res.json({mensagem: "Token removido"})
    }
}