import { Router } from "express";
import { insertarUnidadDosis, listarUnidadDosis, obtenerUnidadDosis, actualizarUnidadDosis, darBajaUnidadDosis } from "../controllers/unidad_dosis.controller";

const router: Router = Router();

router.post('/', insertarUnidadDosis);
router.get("/", listarUnidadDosis);
router.get('/:idUnidadDosis', obtenerUnidadDosis);
router.put('/:idUnidadDosis', actualizarUnidadDosis);
router.delete('/:idUnidadDosis', darBajaUnidadDosis);

export default router;