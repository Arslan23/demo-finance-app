import { Column, CreateDateColumn, DeleteDateColumn, Entity, Generated, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { UsersModule } from "../users.module";

export enum UserRole {
    ADMIN = "admin",
    AGENT = "agent",
    COMITE = "comite"   
}

@Entity()
export class User {
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

    @Column({type: "varchar",length: 150})
    password: string;


    @Column({default: true})
    isActive: boolean;

    @Column({default: false})
    isDeleted: boolean;

    @Column({type: 'enum',enum: UserRole,default: UserRole.AGENT})
    role: UserRole;

    @CreateDateColumn()
    createdDate: Timestamp;

    @UpdateDateColumn()
    updatedDate: Timestamp;

    @DeleteDateColumn()
    deletedDate: Timestamp;

}
