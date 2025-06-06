import { Router } from "express";
import { insertarTipoMedicamento, listarTipoMedicamento, obtenerTipoMedicamento, actualizarTipoMedicamento, darBajaTipoMedicamento } from "../controllers/tipo_medicamento.controller";

const router: Router = Router();

router.post('/', insertarTipoMedicamento);
router.get("/", listarTipoMedicamento);
router.get('/:idTipoMedicamento', obtenerTipoMedicamento);
router.put('/:idTipoMedicamento', actualizarTipoMedicamento);
router.delete('/:idTipoMedicamento', darBajaTipoMedicamento);

export default router;