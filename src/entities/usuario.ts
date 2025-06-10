import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class Usuario {

    @PrimaryGeneratedColumn({ name: 'id_usuario' })
    idUsuario: number;

    @Column({ name: 'nombre' })
    nombre: string;

    @Column({ name: 'apellido_paterno' })
    apellidoPaterno: string;

    @Column({ name: 'apellido_materno' })
    apellidoMaterno: string;

    @Column({ name: 'correo' })
    correo: string;

    @Column({ name: 'password' })
    password: string;

    @Column({ name: 'telefono' })
    telefono?: string;

    @Column({ name: 'fecha_nacimiento' })
    fechaNacimiento: Date;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: number;

    @Column({ name: 'fecha_creacion' })
    fechaCreacion: Date;
    
}   