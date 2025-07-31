document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('login-form').addEventListener('submit', async (e) => {
        e.preventDefault()

        const cpf = document.getElementById('cpf').value
        const password = document.getElementById('password').value
        const message = document.getElementById('message')

        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ cpf, password })
            })

            const data = await response.json()

            if (response.ok) {
                message.style.color = 'green'
                message.textContent = `Login bem-sucedido! Token: ${data.token}`
            } else {
                message.style.color = 'red'
                message.textContent = data.error || 'Erro no login'
            }
        } catch (error) {
            console.error('Erro na requisição:', error)
            message.textContent = 'Erro de conexão com o servidor'
        }
    })

})