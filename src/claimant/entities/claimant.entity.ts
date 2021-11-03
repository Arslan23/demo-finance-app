import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Claimant extends BaseEntity {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    @Generated("uuid")
    uuid: string;

    @ApiProperty()
    @Column({type: "varchar",length: 150})
    firstname: string;
    
    @ApiProperty()
    @Column({type: "varchar",length: 150})
    lastname: string;
    
    @ApiProperty()
    @Column({unique: true})
    email: string;
    
    @ApiProperty()
    @Column({nullable: true})
    birthdate: Date;
    
    @ApiProperty()
    @Column()
    @CreateDateColumn()
    createdAt: Date;
    
    @ApiProperty()
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
    
    @ApiProperty()
    @Column({type: "varchar",length: 150, nullable: true})
    phone1: string;
    
    @ApiProperty()
    @Column({type: "varchar",length: 150, nullable: true})
    phone2: string;
     
    @ApiProperty()
    @Column({type: "varchar",length: 150, nullable: true})
    address: string;
    

    @ApiProperty()
    @Column({type: "varchar",length: 150, nullable: true})
    nationality: string;
    

    @ApiProperty()
    @Column({nullable: false})
    living_address_since: Date;
    

    @ApiProperty()
    @Column({default: true})
    isActive: boolean;
    
    @ApiProperty()
    @Column({default: false})
    isDeleted: boolean;
}
