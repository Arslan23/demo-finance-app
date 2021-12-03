import { BaseEntity, BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, Generated, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcryptjs';
import { UserRole } from "src/common/enums/role";
import { ApiProperty } from "@nestjs/swagger";


@Entity()
export class User extends BaseEntity {
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
    @Column({type: "varchar",length: 150})
    password: string;

    @ApiProperty()
    @Column({default: true})
    isActive: boolean;

    @ApiProperty()
    @Column({default: false})
    isDeleted: boolean;

    @ApiProperty()
    @Column({type: 'enum',enum: UserRole,default: UserRole.AGENT})
    role: UserRole;

    @ApiProperty()
    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @ApiProperty()
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;


  

    @BeforeInsert()
    async hashPassword()
    {
        this.password = await bcrypt.hash(this.password, 8);
    }

    async validatePassword(password: string): Promise<boolean>
    {
        return bcrypt.compare(password, this.password);
    }
    
}
