import { BaseEntity } from "src/common/entities/base.entity";
import { TypeDePret } from "src/type-de-pret/entities/type-de-pret.entity";
import { Column, Entity, Generated, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DemandePret extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated("uuid")
    uuid: string;

    @Column()
    reference: string;

    @Column({nullable: true})
    amount: number;

    @Column({nullable: true})
    duration: number;


    @Column({nullable: true})
    annual_income: number;

    @ManyToOne(()=> TypeDePret, type_de_pret => type_de_pret.demandePrets)
    typeDePret: TypeDePret

    
    @Column({default: true})
    isActive: boolean;

    @Column({default: false})
    isDeleted: boolean;


}
