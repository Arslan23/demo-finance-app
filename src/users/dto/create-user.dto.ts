import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsEnum, IsNotEmpty } from "class-validator";
import { UserRole } from "src/common/enums/role";


export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    firstname: string;

    @ApiProperty()
    @IsNotEmpty()
    lastname: string;

    @ApiProperty()
    @IsEmail()
    email: string;
    
    @ApiProperty()
    @IsDate()
    birthdate: Date;
 
    @ApiProperty()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsNotEmpty()
    isActive: boolean;
    
    @ApiProperty()
    @IsNotEmpty()
    isDeleted: boolean;

    @ApiProperty()
    @IsEnum(UserRole)
    role: UserRole;

}
