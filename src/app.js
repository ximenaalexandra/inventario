/* importamos al framework express */
import express from 'express';
import categoriasRoutes from "./routes/categorias.routes.js"
/* Asignamos a app toda funcionalidad para el server web*/
const app = express();
/* setear un puerto a mi web server */
app.set("port",5000)
/* routes*/
app.use("/api/categorias",categoriasRoutes)
/* Hacemso disponible a mi server app para toda la aplicaccion*/
export default app;