import { Router } from "express";
import { insertarDiaRecordatorio, listarDiasRecordatorio, obtenerDiaRecordatorio, actualizarDiaRecordatorio, darBajaDiaRecordatorio } from "../controllers/dia_recordatorio.controller";

const router: Router = Router();

router.post('/', insertarDiaRecordatorio);
router.get("/", listarDiasRecordatorio);
router.get('/:idDiaRecordatorio', obtenerDiaRecordatorio);
router.put('/:idDiaRecordatorio', actualizarDiaRecordatorio);
router.delete('/:idDiaRecordatorio', darBajaDiaRecordatorio);

export default router;
