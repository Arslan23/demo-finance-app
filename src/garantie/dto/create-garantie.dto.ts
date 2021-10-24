import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNotEmptyObject, IsObject } from "class-validator";
import { DemandePret } from "src/demande-pret/entities/demande-pret.entity";
import { Document } from "src/document/entities/document.entity";
import { TypeGarantie } from "src/type-garantie/entities/type-garantie.entity";

export class CreateGarantieDto {

    @ApiProperty()
    @IsNotEmptyObject()
    demandePret: DemandePret;

    @ApiProperty()
    @IsNotEmptyObject()
    typeGarantie: TypeGarantie;

    @ApiProperty()
    @IsNotEmptyObject()
    document: Document;

    @ApiProperty()
    @IsNotEmpty()
    idcard1: string;

    @ApiProperty()
    @IsNotEmpty()
    idcard2: string;

}
