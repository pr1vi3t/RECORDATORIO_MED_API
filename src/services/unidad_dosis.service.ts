import { AppDataSource } from "../config/appdatasource";
import { UnidadDosis } from "../entities/unidad_dosis";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(UnidadDosis);

export const insertarUnidadDosis = async (data: Partial<UnidadDosis>) => {
    await repository.save(data);
}

export const listarUnidadDosis = async (): Promise<UnidadDosis[]> => {
    return await repository.find({where: { estadoAuditoria: EstadoAuditoria.ACTIVO }});
}

export const obtenerUnidadDosis = async (idUnidadDosis: number): Promise<UnidadDosis> => {
    return await repository.findOne({ where: { idUnidadDosis, estadoAuditoria: EstadoAuditoria.ACTIVO } });
}

export const actualizarUnidadDosis = async (idUnidadDosis: number, data: Partial<UnidadDosis>) => {
    await repository.update(idUnidadDosis, data);
}

export const darBajaUnidadDosis = async (idUnidadDosis: number): Promise<void> => {
    await repository.update(idUnidadDosis, { estadoAuditoria: EstadoAuditoria.INACTIVO });
}
