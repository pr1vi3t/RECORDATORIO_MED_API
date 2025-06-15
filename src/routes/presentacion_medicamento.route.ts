import { Router } from "express";
import { insertarPresentacionMedicamento, listarPresentacionMedicamento, obtenerPresentacionMedicamento, actualizarPresentacionMedicamento, darBajaPresentacionMedicamento } from "../controllers/presentacion_medicamento.controller";

const router: Router = Router();

router.post('/', insertarPresentacionMedicamento);
router.get("/", listarPresentacionMedicamento);
router.get('/:idPresentacionMedicamento', obtenerPresentacionMedicamento);
router.put('/:idPresentacionMedicamento', actualizarPresentacionMedicamento);
router.delete('/:idPresentacionMedicamento', darBajaPresentacionMedicamento);

export default router;