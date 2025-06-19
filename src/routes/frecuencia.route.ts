import { Router } from "express";
import { insertarFrecuencia, listarFrecuencias, obtenerFrecuencia, actualizarRecordatorio, darBajaTipoMedicamento } from "../controllers/frecuencia.controller";

const router: Router = Router();

router.post('/', insertarFrecuencia);
router.get("/", listarFrecuencias);
router.get('/:idFrecuencia', obtenerFrecuencia);
router.put('/:idFrecuencia', actualizarRecordatorio);
router.delete('/:idFrecuencia', darBajaTipoMedicamento);

export default router;