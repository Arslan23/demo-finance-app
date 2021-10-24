import { IsDate, IsEmail, IsEmpty, IsNotEmpty, IsPhoneNumber } from "class-validator"

export class CreateDemandeurDto {
    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    @IsEmail()
    email: string;

    @IsDate()
    birthdate: Date;

    @IsPhoneNumber()
    phone1: string;

    @IsPhoneNumber()
    phone2: string;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    nationality: string;

    @IsDate()
    living_address_since: Date;
}
