// Função auxiliar para formatar CPF
const formatCPF = (cpfValue) => {
    // Remove tudo que não for dígito
    cpfValue = cpfValue.replace(/\D/g, '');
    // Aplica a formatação 000.000.000-00
    return cpfValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

// Funções auxiliares para exibir mensagens
const showMessage = (elementId, message, type) => {
    const messageElement = document.getElementById(elementId);
    messageElement.textContent = message;
    messageElement.className = `message ${type}-message`; // Define a classe com base no tipo
    messageElement.style.display = 'block'; // Garante que a mensagem seja visível
};

const clearMessage = (elementId) => {
    const messageElement = document.getElementById(elementId);
    messageElement.textContent = '';
    messageElement.className = 'message';
    messageElement.style.display = 'none'; // Esconde a mensagem
};

document.addEventListener('DOMContentLoaded', () => {
    const showLoginButton = document.getElementById('show-login');
    const showRegisterButton = document.getElementById('show-register');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    const loginCpfInput = document.getElementById('login-cpf');
    const registerCpfInput = document.getElementById('register-cpf');

    // Adiciona listener para formatar CPF enquanto o usuário digita
    loginCpfInput.addEventListener('input', (e) => {
        e.target.value = formatCPF(e.target.value);
    });
    registerCpfInput.addEventListener('input', (e) => {
        e.target.value = formatCPF(e.target.value);
    });

    // Função para alternar entre formulários
    const toggleForms = (showForm) => {
        if (showForm === 'login') {
            loginForm.classList.add('active');
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
            registerForm.classList.remove('active');
            showLoginButton.classList.add('active');
            showRegisterButton.classList.remove('active');
            clearMessage('register-message'); // Limpa mensagens do formulário oculto
        } else { // 'register'
            registerForm.classList.add('active');
            registerForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
            loginForm.classList.remove('active');
            showRegisterButton.classList.add('active');
            showLoginButton.classList.remove('active');
            clearMessage('login-message'); // Limpa mensagens do formulário oculto
        }
    };

    // Event listeners para os botões de alternância
    showLoginButton.addEventListener('click', () => toggleForms('login'));
    showRegisterButton.addEventListener('click', () => toggleForms('register'));

    // Lógica de Submissão do Formulário de Login
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        clearMessage('login-message');

        const cpfValue = loginCpfInput.value;
        const password = document.getElementById('login-password').value;

        // Validação básica do CPF antes de enviar (opcional, pode ser mais robusta)
        if (!cpf.isValid(cpfValue)) { // Usando a função isValid da lib cpf-cnpj-validator
            showMessage('login-message', 'CPF inválido.', 'error');
            return;
        }

        try {
            // Endpoint de Login: /login
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cpf: cpfValue, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Login bem-sucedido
                showMessage('login-message', 'Login realizado com sucesso! Redirecionando...', 'success');
                // Aqui você pode armazenar o token (data.token) e a regra (data.rule)
                // Por exemplo, no localStorage:
                localStorage.setItem('userToken', data.token);
                localStorage.setItem('userRole', data.rule);

                // Redirecionar o usuário após um pequeno atraso
                setTimeout(() => {
                    // Exemplo: Redirecionar para uma página de dashboard ou para o início
                    window.location.href = 'index.html';
                }, 1500);

            } else {
                // Erro no login
                const errorMessage = data.error || 'Erro ao realizar login. Verifique suas credenciais.';
                showMessage('login-message', errorMessage, 'error');
            }
        } catch (error) {
            console.error('Erro na requisição de login:', error);
            showMessage('login-message', 'Não foi possível conectar ao servidor. Tente novamente mais tarde.', 'error');
        }
    });

    // Lógica de Submissão do Formulário de Cadastro
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        clearMessage('register-message');

        const cpfValue = registerCpfInput.value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;
        const rule = document.getElementById('register-rule').value;

        // Validações básicas no frontend
        if (!cpf.isValid(cpfValue)) {
            showMessage('register-message', 'CPF inválido.', 'error');
            return;
        }
        if (password !== confirmPassword) {
            showMessage('register-message', 'As senhas não coincidem.', 'error');
            return;
        }
        if (password.length < 6) { // Exemplo: senha mínima de 6 caracteres
            showMessage('register-message', 'A senha deve ter no mínimo 6 caracteres.', 'error');
            return;
        }
        if (!rule) {
            showMessage('register-message', 'Por favor, selecione o tipo de usuário.', 'error');
            return;
        }

        try {
            // Endpoint de Cadastro: /create (AJUSTADO AQUI!)
            const response = await fetch('http://localhost:3000/api/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cpf: cpfValue, password, rule }),
            });

            const data = await response.json();

            if (response.ok) {
                // Cadastro bem-sucedido
                showMessage('register-message', 'Cadastro realizado com sucesso! Você já pode fazer login.', 'success');
                // Opcional: Alternar para o formulário de login após o cadastro
                setTimeout(() => {
                    toggleForms('login');
                    // Limpar os campos do formulário de cadastro
                    registerForm.reset();
                    clearMessage('register-message');
                }, 2000);
            } else {
                // Erro no cadastro
                const errorMessage = data.error || 'Erro ao realizar cadastro. Tente novamente.';
                showMessage('register-message', errorMessage, 'error');
            }
        } catch (error) {
            console.error('Erro na requisição de cadastro:', error);
            showMessage('register-message', 'Não foi possível conectar ao servidor. Tente novamente mais tarde.', 'error');
        }
    });
});