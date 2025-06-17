import { Router } from "express";
import { insertarMedicamento, listarMedicamento, obtenerMedicamento, actualizarMedicamento, darBajaMedicamento } from "../controllers/medicamento.controller";

const router: Router = Router();

router.post('/', insertarMedicamento);
router.get("/", listarMedicamento);
router.get('/:idMedicamento', obtenerMedicamento);
router.put('/:idMedicamento', actualizarMedicamento);
router.delete('/:idMedicamento', darBajaMedicamento);

export default router;