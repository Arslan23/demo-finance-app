import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsEmpty, IsNotEmpty, IsPhoneNumber } from "class-validator"

export class CreateClaimantDto {
    
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
    city: string;

    @ApiProperty()
    @IsPhoneNumber()
    phone1: string;

    @ApiProperty()
    @IsPhoneNumber()
    phone2: string;

    @ApiProperty()
    @IsNotEmpty()
    address: string;

    @ApiProperty()
    @IsNotEmpty()
    nationality: string;
 
    @ApiProperty()
    @IsDate()
    living_address_since: Date;
}
