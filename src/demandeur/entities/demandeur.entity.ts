import { BaseEntity } from "src/common/entities/base.entity";
import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Demandeur extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated("uuid")
    uuid: string;

    @Column({type: "varchar",length: 150})
    firstname: string;

    @Column({type: "varchar",length: 150})
    lastname: string;

    @Column({unique: true})
    email: string;

    @Column({nullable: true})
    birthdate: Date;

    @Column({type: "varchar",length: 150, nullable: true})
    phone1: string;

    @Column({type: "varchar",length: 150, nullable: true})
    phone2: string;

    @Column({type: "varchar",length: 150, nullable: true})
    address: string;

    @Column({type: "varchar",length: 150, nullable: true})
    nationality: string;

    @Column({nullable: false})
    living_address_since: Date;

    @Column({default: true})
    isActive: boolean;

    @Column({default: false})
    isDeleted: boolean;
}
