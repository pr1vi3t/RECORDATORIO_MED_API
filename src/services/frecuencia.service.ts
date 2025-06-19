import { AppDataSource } from "../config/appdatasource";
import { Frecuencia } from "../entities/frecuencia";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Frecuencia);

export const insertarFrecuencia = async (data: Partial<Frecuencia>) => {
    await repository.save(data);
}

export const listarFrecuencias = async (): Promise<Frecuencia[]> => {
    return await repository.find({where: { estadoAuditoria: EstadoAuditoria.ACTIVO }});
}

export const obtenerFrecuencia = async (idFrecuencia: number): Promise<Frecuencia> => {
    return await repository.findOne({ where: { idFrecuencia, estadoAuditoria: EstadoAuditoria.ACTIVO } });
}

export const actualizarFrecuencia = async (idFrecuencia: number, data: Partial<Frecuencia>) => {
    await repository.update(idFrecuencia, data);
}

export const darBajaFrecuencia = async (idFrecuencia: number): Promise<void> => {
    await repository.update(idFrecuencia, { estadoAuditoria: EstadoAuditoria.INACTIVO });
}
