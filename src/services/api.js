import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const token = process.env.TOKEN;

export const api = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        Authorization: `Bearer ${token}`
    },
    timeout: 8 * 1000,
});
