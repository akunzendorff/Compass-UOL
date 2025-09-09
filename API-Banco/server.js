const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Importa as rotas
const customerRoutes = require('./routes/customerRoutes');
const accountRoutes = require('./routes/accountRoutes');

// Inicializa o app Express
const app = express();

// Middleware para permitir que o Express entenda JSON
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado com sucesso!'))
.catch(err => console.error('Erro ao conectar com MongoDB:', err));

// Usando as rotas
app.use('/api/customers', customerRoutes);
app.use('/api/accounts', accountRoutes);

// Define a porta do servidor
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});