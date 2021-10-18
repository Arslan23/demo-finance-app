import { BaseEntity } from "src/common/entities/base.entity";
import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Document extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated("uuid")
    uuid: string;

    @Column({type: "varchar",length: 150, nullable: true})
    path: string;

    @Column({type: "varchar",length: 150, nullable: true})
    filename: string;

    @Column({type: "varchar",length: 150, nullable: true})
    fileUrl: string;


    @Column({default: true})
    isActive: boolean;

    @Column({default: false})
    isDeleted: boolean;
}
