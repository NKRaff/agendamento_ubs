import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

// Iniciar o servidor
app.listen(process.env.PORT, () => {
    console.log(`Gateway rodando na porta ${process.env.PORT}`);
});
