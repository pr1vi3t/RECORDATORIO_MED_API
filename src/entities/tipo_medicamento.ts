import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tipos_medicamento')
export class TipoMedicamento {

    @PrimaryGeneratedColumn({ name: 'id_tipo_medicamento' })
    idTipoMedicamento: number;

    @Column({ name: 'nombre' })
    nombre: string;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: number;

    @Column({ name: 'fecha_creacion' })
    fechaCreacion: Date;
    
}   