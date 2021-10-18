import { BaseEntity } from "src/common/entities/base.entity";
import { DemandePret } from "src/demande-pret/entities/demande-pret.entity";
import { Column, Double, Entity, Generated, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class TypeDePret extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated("uuid")
    uuid: string;

    @Column({nullable: true})
    name: string;

    @Column({nullable: true})
    amount_min: number;

    @Column({nullable: true})
    amount_max: number;

    @Column({nullable: true})
    duration_min: number;


    @Column({nullable: true})
    duration_max: number;


    @Column({nullable: true})
    interest_rate: number;

    @OneToMany(()=> DemandePret, demandePret => demandePret.typeDePret)
    demandePrets: DemandePret[];

    
    @Column({default: true})
    isActive: boolean;

    @Column({default: false})
    isDeleted: boolean;
}
