import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_TYPE, DB_USERNAME } from "../shared/constants";
import { DataSource } from "typeorm";
import { Usuario } from "../entities/usuario";
import { TipoMedicamento } from "../entities/tipo_medicamento";
import { UnidadDosis } from "../entities/unidad_dosis";

export const AppDataSource = new DataSource({
    type: DB_TYPE as any,
    host: DB_HOST,
    port: Number(DB_PORT || '0'),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    entities: [Usuario, TipoMedicamento, UnidadDosis]
});