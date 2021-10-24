import { IsDate, IsEmail, IsEnum, IsNotEmpty } from "class-validator";
import { UserRole } from "src/common/enums/role";


export class CreateUserDto {
    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    @IsEmail()
    email: string;

    @IsDate()
    birthdate: Date;

    @IsNotEmpty()
    password: string;


    @IsNotEmpty()
    isActive: boolean;

    @IsNotEmpty()
    isDeleted: boolean;

    @IsEnum(UserRole)
    role: UserRole;

}
