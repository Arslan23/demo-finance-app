import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { GuaranteeType } from "src/guarantee-type/entities/guarantee-type.entity";

export class UploadSingleGuaranteeDto {

    @ApiProperty()
    @IsNotEmpty()
    file: File;

    @ApiProperty()
    @IsNotEmpty()
    guaranteeType: GuaranteeType;

}
