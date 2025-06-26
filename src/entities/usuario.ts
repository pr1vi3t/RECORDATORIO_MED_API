import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Recordatorio } from "./recordatorio";
import { ContactoEmergencia } from "./contacto_emergencia";

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

    @OneToMany(() => Recordatorio, (recordatorio) => recordatorio.usuario)
    usuarios: Usuario[];

    @OneToMany(() => ContactoEmergencia, (contactos_emergencia) => contactos_emergencia.usuario)
    usuarios_ce: Usuario[];
}   