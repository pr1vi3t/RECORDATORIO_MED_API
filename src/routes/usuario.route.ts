import { Router } from "express";
import { insertarUsuario, listarUsuarios, loginUsuario } from "../controllers/usuario.controller";

const router: Router = Router();

router.post('/', insertarUsuario);
router.get("/", listarUsuarios);
router.post("/login", loginUsuario);

export default router;