import { AppDataSource } from "../config/appdatasource";
import { Medicamento } from "../entities/medicamento";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Medicamento);

export const insertarMedicamento = async (data: Partial<Medicamento>) => {
    await repository.save(data);
}

export const listarMedicamento = async (): Promise<Medicamento[]> => {
    return await repository.find({where: 
        { estadoAuditoria: EstadoAuditoria.ACTIVO, tipoMedicamento:{estadoAuditoria: EstadoAuditoria.ACTIVO}, presentacionMedicamento:{estadoAuditoria: EstadoAuditoria.ACTIVO}, unidadDosis:{estadoAuditoria: EstadoAuditoria.ACTIVO}},
        relations: ['tipoMedicamento','presentacionMedicamento','unidadDosis']
    });     
}

export const obtenerMedicamento = async (idMedicamento: number): Promise<Medicamento> => {
    return await repository.findOne({ where: { idMedicamento, estadoAuditoria: EstadoAuditoria.ACTIVO, tipoMedicamento:{estadoAuditoria: EstadoAuditoria.ACTIVO}, presentacionMedicamento:{estadoAuditoria: EstadoAuditoria.ACTIVO}, unidadDosis:{estadoAuditoria: EstadoAuditoria.ACTIVO}},
        relations: ['tipoMedicamento','presentacionMedicamento','unidadDosis']
    });    
}

export const actualizarMedicamento = async (idMedicamento: number, data: Partial<Medicamento>) => {
    await repository.update(idMedicamento, data);
}

export const darBajaMedicamento = async (idMedicamento: number): Promise<void> => {
    await repository.update(idMedicamento, { estadoAuditoria: EstadoAuditoria.INACTIVO });
}
