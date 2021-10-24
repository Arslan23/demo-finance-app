import { IsNotEmpty, IsNotEmptyObject } from "class-validator";
import { Demandeur } from "src/demandeur/entities/demandeur.entity";
import { TypeDePret } from "src/type-de-pret/entities/type-de-pret.entity";

export class CreateDemandePretDto {
    @IsNotEmpty()
    reference: string;

    @IsNotEmpty()
    amount: number;

    @IsNotEmpty()
    duration: number;


    @IsNotEmpty()
    annual_income: number;

    @IsNotEmptyObject()
    typeDePret: TypeDePret;

    @IsNotEmptyObject()
    demandeur: Demandeur;

}
