import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNotEmptyObject, IsObject } from "class-validator";
import { Document } from "src/document/entities/document.entity";
import { LoanRequest } from "src/loan-request/entities/loan-request.entity";
import { GuaranteeType } from "src/guarantee-type/entities/guarantee-type.entity";

export class CreateGuaranteeDto {

    @ApiProperty()
    @IsNotEmptyObject()
    guaranteeType: GuaranteeType;

    @ApiProperty()
    @IsNotEmptyObject()
    loanRequest: LoanRequest;

    @ApiProperty()
    @IsNotEmptyObject()
    documents: Document[];

}
