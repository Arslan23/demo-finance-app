import { IsNotEmpty, IsNotEmptyObject, IsObject } from "class-validator";
import { DemandePret } from "src/demande-pret/entities/demande-pret.entity";
import { Document } from "src/document/entities/document.entity";
import { TypeGarantie } from "src/type-garantie/entities/type-garantie.entity";

export class CreateGarantieDto {
    
    @IsNotEmptyObject()
    demandePret: DemandePret;

   @IsNotEmptyObject()
    typeGarantie: TypeGarantie;

    @IsNotEmptyObject()
    document: Document;

    @IsNotEmpty()
    idcard1: string;

    @IsNotEmpty()
    idcard2: string;

}
