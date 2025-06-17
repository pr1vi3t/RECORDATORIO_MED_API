import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Medicamento } from "./medicamento";

@Entity('presentaciones_medicamento')
export class PresentacionMedicamento {

    @PrimaryGeneratedColumn({ name: 'id_presentacion_medicamento' })
    idPresentacionMedicamento: number;

    @Column({ name: 'nombre' })
    nombre: string;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: number;

    @Column({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @OneToMany(() => Medicamento, (medicamento) => medicamento.presentacionMedicamento)
    presentacionesMedicamento: PresentacionMedicamento[];
}   