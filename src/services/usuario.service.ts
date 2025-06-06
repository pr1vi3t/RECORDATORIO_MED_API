import bcrypt from "bcrypt";
import AppDataSource from "../config/appdatasource";
import { Usuario } from "../entities/Usuario";
import { EstadoAuditoria } from "../enums/estado-auditoria";

const repository = AppDataSource.getRepository(Usuario);

export const insertarUsuario = async (usuario: Partial<Usuario>) => {
    if (usuario.password) {
        const salt = await bcrypt.genSalt(10);
        usuario.password = await bcrypt.hash(usuario.password, salt);
    }
    await repository.save(usuario);
}

export const listarUsuarios = async (): Promise<Usuario[]> => {
    return await repository.find({where: { estadoAuditoria: EstadoAuditoria.ACTIVO }});
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