import axios from "axios";

// No Next.js, não precisa do dotenv.config()
// As variáveis de ambiente são automaticamente carregadas
const token = process.env.TOKEN || process.env.GITHUB_TOKEN;

export const api = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        ...(token && { Authorization: `Bearer ${token}` })
    },
    timeout: 15 * 1000, // Aumentei o timeout
});