import { Router } from "express";
import { insertarContactoEmergencia, listarContactoEmergencia, obtenerContactoEmergencia, actualizarContactoEmergencia, darBajaContactoEmergencia } from "../controllers/contacto_emergencia.controller";

const router: Router = Router();

router.post('/', insertarContactoEmergencia);
router.get("/", listarContactoEmergencia);
router.get('/:idContactoEmergencia', obtenerContactoEmergencia);
router.put('/:idContactoEmergencia', actualizarContactoEmergencia);
router.delete('/:idContactoEmergencia', darBajaContactoEmergencia);

export default router;