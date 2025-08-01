document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('register-form').addEventListener('submit', async (event) => {
        event.preventDefault()

        const cpf = document.getElementById('cpf').value
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const birthDate = document.getElementById('birthDate').value
        const password = document.getElementById('password').value
        
        try {
            await createUser(cpf, name, email, birthDate)
            //await createAccount(cpf, password)
            //await login(cpf, password)
        } catch (error) {
            console.error('Erro na requisição:', error)
            message.textContent = 'Erro de conexão com o servidor'
        }
    })
})

async function createAccount(cpf, password) {
    const response = await fetch('http://localhost:3000/auth/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({cpf, rule:"Paciente", password})
    })
}

async function createUser(cpf, name, email, birthDate) {
    const response = await fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({cpf, name, email, birthDate})
    })
}

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