import { Router } from "express";
import { insertarUsuario, listarUsuarios, obtenerUsuario, actualizarUsuario, darBajaUsuario, loginUsuario } from "../controllers/usuario.controller";

const router: Router = Router();

router.post('/', insertarUsuario);
router.get("/", listarUsuarios);
router.get('/:idUsuario', obtenerUsuario);
router.put('/:idUsuario', actualizarUsuario);
router.delete('/:idUsuario', darBajaUsuario);
router.post("/login", loginUsuario);

export default router;