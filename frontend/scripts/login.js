document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-form').addEventListener('submit', async (event) => {
        event.preventDefault()

        const cpf = document.getElementById('cpf').value
        const password = document.getElementById('password').value

        try {
            await login(cpf, password)
        } catch (error) {
            console.log('Erro ao fazer login')
        }
    })
})

async function login(cpf, password) {
    const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },body: JSON.stringify({ cpf, password })
    })

    const data = await response.json()

    if (response.ok) {
        localStorage.setItem('token', data.token);
        if(data.rule === 'Admin') window.location.href = '/admin'
        else if(data.rule === 'Profissional') window.location.href = '/profissional'
        else if(data.rule === 'Paciente') window.location.href = '/paciente'
        else console.log('Tipo da conta não identificada');
    } else
        console.log('Erro no login');
}