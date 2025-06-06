import { Router } from "express";
import { insertarUsuario, listarUsuarios } from "../controllers/usuario.controller";

const router: Router = Router();

router.post('/', insertarUsuario);
router.get("/", listarUsuarios);

export default router;