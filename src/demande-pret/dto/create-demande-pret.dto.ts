import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNotEmptyObject } from "class-validator";
import { Demandeur } from "src/demandeur/entities/demandeur.entity";
import { TypeDePret } from "src/type-de-pret/entities/type-de-pret.entity";

export class CreateDemandePretDto {
    
    @ApiProperty()
    @IsNotEmpty()
    reference: string;

    @ApiProperty()
    @IsNotEmpty()
    amount: number;

    @ApiProperty()
    @IsNotEmpty()
    duration: number;


    @ApiProperty()
    @IsNotEmpty()
    annual_income: number;

    @ApiProperty()
    @IsNotEmptyObject()
    typeDePret: TypeDePret;

    @ApiProperty()
    @IsNotEmptyObject()
    demandeur: Demandeur;

}
