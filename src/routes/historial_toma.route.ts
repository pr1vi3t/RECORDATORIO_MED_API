import { Router } from "express";
import { insertarHistorialToma, listarHistorialToma, obtenerHistorialToma, actualizarHistorialToma, darBajaHistorialToma } from "../controllers/historial_toma.controller";

const router: Router = Router();

router.post('/', insertarHistorialToma);
router.get("/", listarHistorialToma);
router.get('/:idHistorialToma', obtenerHistorialToma);
router.put('/:idHistorialToma', actualizarHistorialToma);
router.delete('/:idHistorialToma', darBajaHistorialToma);

export default router;