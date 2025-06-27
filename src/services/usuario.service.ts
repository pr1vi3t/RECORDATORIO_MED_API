import bcrypt from "bcrypt";
import { AppDataSource } from "../config/appdatasource";
import { Usuario } from "../entities/usuario";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Usuario);

export const insertarUsuario = async (data: Partial<Usuario>) => {
    if (data.password) {
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);
    }
    const newUsuario: Usuario = await repository.save(data);
    return await repository.findOne({where: {idUsuario: newUsuario.idUsuario}})
}

export const listarUsuarios = async (): Promise<Usuario[]> => {
    return await repository.find({where: { estadoAuditoria: EstadoAuditoria.ACTIVO }});
}

export const obtenerUsuario = async (idUsuario: number): Promise<Usuario> => {
    return await repository.findOne({ where: { idUsuario, estadoAuditoria: EstadoAuditoria.ACTIVO } });
}

export const actualizarUsuario = async (idUsuario: number, data: Partial<Usuario>) => {
    if (data.password) {
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);
    }
    await repository.update(idUsuario, data);
}

export const darBajaUsuario = async (idUsuario: number): Promise<void> => {
    await repository.update(idUsuario, { estadoAuditoria: EstadoAuditoria.INACTIVO });
}

export const loginUsuario = async (correo: string, password: string): Promise<Usuario | null> => {

    const usuario = await repository.findOneBy({ correo, estadoAuditoria: EstadoAuditoria.ACTIVO });
    if (!usuario) {
        return null;
    }
    const esValido = await bcrypt.compare(password, usuario.password);
    if (!esValido) {
        return null;
    }

    return usuario;
}