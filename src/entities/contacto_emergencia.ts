import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany }  from "typeorm";
import { Usuario } from './usuario';

@Entity('contactos_emergencia')
export class ContactoEmergencia {

    @PrimaryGeneratedColumn({ name: 'id_contacto_emergencia' })
    idContactoEmergencia: number;

    @ManyToOne(() => Usuario, (usuarios) => usuarios.usuarios_ce)
    @JoinColumn({ name: 'id_usuario' })
    usuario: Usuario;

    @Column({ name: 'nombre' })
    nombre: string;

    @Column({ name: 'apellido_paterno' })
    apellidoPaterno: string;

    @Column({ name: 'apellido_materno' })
    apellidoMaterno: string;

    @Column({ name: 'correo' })
    correo: string;

    @Column({ name: 'telefono' })
    telefono: string;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: number;

    @Column({ name: 'fecha_creacion' })
    fechaCreacion: Date;
}   