import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn }  from "typeorm";
import { Medicamento } from "./medicamento";

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

    @OneToMany(() => Medicamento, (medicamento) => medicamento.tipoMedicamento)
    tiposMedicamento: TipoMedicamento[];
}   