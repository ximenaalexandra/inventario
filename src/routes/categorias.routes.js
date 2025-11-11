import {Router} from "express";
import { methodHTTP as CategoriaController } from "../controllers/categoria.controllers.js";
/*creamos el enrutador*/
const router= Router();
/* configuramos repsuesta desde servermetodo http get*/
router.get("/", CategoriaController.getCategorias)

/* Hacemos disponible al router en toda la app*/
export default router;