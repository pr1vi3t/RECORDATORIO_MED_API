import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Medicamento } from "./medicamento";

@Entity('unidades_dosis')
export class UnidadDosis {

    @PrimaryGeneratedColumn({ name: 'id_unidad_dosis' })
    idUnidadDosis: number;

    @Column({ name: 'nombre' })
    nombre: string;

    @Column({ name: 'abreviatura' })
    abreviatura: string;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: number;

    @Column({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @OneToMany(() => Medicamento, (medicamento) => medicamento.unidadDosis)
    unidadesDosis: UnidadDosis[];
}   