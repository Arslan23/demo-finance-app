import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsEmail, IsEmpty, IsNotEmpty, IsOptional, IsPhoneNumber } from "class-validator"

export class CreateClaimantDto {
    
    @ApiProperty()
    @IsNotEmpty()
    firstname: string;

    @ApiProperty()
    @IsNotEmpty()
    lastname: string;

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsDateString()
    birthdate: Date;


    @ApiProperty()
    @IsNotEmpty()
    city: string;

    @ApiProperty()
    @IsPhoneNumber("BJ")
    phone1: string;

    @ApiProperty()
    @IsOptional()
    @IsPhoneNumber("BJ")
    phone2: string;

    @ApiProperty()
    @IsNotEmpty()
    address: string;

    @ApiProperty()
    @IsNotEmpty()
    nationality: string;
 
    @ApiProperty()
    @IsDateString()
    living_address_since: Date;
}
