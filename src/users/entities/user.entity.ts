import { BaseEntity } from "src/common/entities/base.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Generated, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { UsersModule } from "../users.module";

export enum UserRole  {
    ADMIN = "admin",
    AGENT = "agent",
    COMITE = "comite"   
}

@Entity()
export class User extends BaseEntity {
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

    @Column({type: "varchar",length: 150})
    password: string;


    @Column({default: true})
    isActive: boolean;

    @Column({default: false})
    isDeleted: boolean;

    @Column({type: 'enum',enum: UserRole,default: UserRole.AGENT})
    role: UserRole;
}
