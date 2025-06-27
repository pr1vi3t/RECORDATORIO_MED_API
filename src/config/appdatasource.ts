import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_TYPE, DB_USERNAME } from "../shared/constants";
import { DataSource } from "typeorm";
import { Usuario } from "../entities/usuario";
import { TipoMedicamento } from "../entities/tipo_medicamento";
import { UnidadDosis } from "../entities/unidad_dosis";
import { PresentacionMedicamento } from "../entities/presentacion_medicamento";
import { Medicamento } from "../entities/medicamento";
import { Recordatorio } from "../entities/recordatorio";
import { DiaRecordatorio } from "../entities/dia_recordatorio";
import { Frecuencia } from "../entities/frecuencia";
import { ContactoEmergencia } from "../entities/contacto_emergencia";
import { HistorialToma } from "../entities/historial_toma";

export const AppDataSource = new DataSource({
    type: DB_TYPE as any,
    host: DB_HOST,
    port: Number(DB_PORT || '0'),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    entities: [Usuario, TipoMedicamento, UnidadDosis, PresentacionMedicamento, Medicamento, Recordatorio, DiaRecordatorio, Frecuencia, ContactoEmergencia, HistorialToma]
});