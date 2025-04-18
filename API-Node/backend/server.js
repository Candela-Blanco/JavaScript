import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@libsql/client";
dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const db = createClient({
    url: process.env.TURSO_URL,
    authToken: process.env.TURSO_URL_TOKEN,
});

async function initializeBatabase() {
    try {
        await db.execute(`
            CREATE TABLE IF NOT EXISTS usuarios(
            id TEXT PRIMARY KEY,
            nombre TEXT NOT NULL,
            edad INTEGER NOT NULL
            )
            `);
    } catch (error) {
        console.error("Error al inicializar la base de datos", error);
    }
}

app.get("/api/usuarios", async (req, res) => {
    try {
        const result = await db.execute("SELECT * FROM usuarios");
        res.json(result.rows);
    } catch (error) {
        res.status(404).json({ mensaje: "Error al obtener Usuarios" });
    }
});

app.post("/api/usuarios", async (req, res) => {
    const { nombre, edad } = req.body;
    if (!nombre || !edad) {
        return res
            .status(400)
            .json({ mensaje: "Nombre y edad son requeridos" });
    }
    try {
        const id = crypto.randomUUID();

        await db.execute({
            sql: "INSERT INTO usuarios (id, nombre, edad) VALUES(?, ?, ?)",
            args: [id, nombre, edad],
        });
        res.status(201).json({ id, nombre, edad });
    } catch (error) {
        res.status(500).json({ mensaje });
    }
});

(async () => {
    await initializeBatabase();
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
})();
