import { Router } from "express";
import { insertarRecordatorio, listarRecordatorios, obtenerRecordatorio, actualizarRecordatorio, darBajaRecordatorio, listarRecordatoriosPorUsuario } from "../controllers/recordatorio.controller";

const router: Router = Router();

router.post('/', insertarRecordatorio);
router.get("/", listarRecordatorios);
router.get('/usuario/:idUsuario', listarRecordatoriosPorUsuario);
router.get('/:idRecordatorio', obtenerRecordatorio);
router.put('/:idRecordatorio', actualizarRecordatorio);
router.delete('/:idRecordatorio', darBajaRecordatorio);

export default router;