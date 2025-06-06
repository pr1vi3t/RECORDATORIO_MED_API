import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/*
CREATE TABLE usuarios (
  id_usuario INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido_paterno VARCHAR(100) NOT NULL,
  apellido_materno VARCHAR(100) NOT NULL,
  correo VARCHAR(150) NOT NULL,
  password VARCHAR(255) NOT NULL,
  telefono VARCHAR(20),
  fecha_nacimiento DATE NOT NULL,
  estado_auditoria INT NOT NULL,
  fecha_creacion DATETIME NOT NULL
);
*/

@Entity('usuarios')
export class Usuario {

    @PrimaryGeneratedColumn({ name: 'id_usuario' })
    idUsuario: number;

    @Column({ name: 'nombre', type: 'varchar', length: 100, nullable: false })
    nombre: string;

    @Column({ name: 'apellido_paterno', type: 'varchar', length: 100, nullable: false })
    apellidoPaterno: string;

    @Column({ name: 'apellido_materno', type: 'varchar', length: 100, nullable: false })
    apellidoMaterno: string;

    @Column({ name: 'correo', type: 'varchar', length: 150, nullable: false })
    correo: string;

    @Column({ name: 'password', type: 'varchar', length: 255, nullable: false })
    password: string;

    @Column({ name: 'telefono', type: 'varchar', length: 20, nullable: true })
    telefono?: string;

    @Column({ name: 'fecha_nacimiento', type: 'date', nullable: false })
    fechaNacimiento: Date;

    @Column({ name: 'estado_auditoria', type: 'int', default: 1, nullable: false })
    estadoAuditoria: number;

    @Column({ name: 'fecha_creacion', type: 'datetime', default: () => "CURRENT_TIMESTAMP", nullable: false })
    fechaCreacion: Date;
    
}   