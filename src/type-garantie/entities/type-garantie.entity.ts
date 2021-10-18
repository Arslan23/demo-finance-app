import { BaseEntity } from "src/common/entities/base.entity";
import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TypeGarantie extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated("uuid")
    uuid: string;

    @Column({type: "varchar",length: 150, nullable: true})
    type_garantie: string;

    @Column({default: true})
    isActive: boolean;

    @Column({default: false})
    isDeleted: boolean;

 
}
