import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ArrayNotEmpty, ValidateNested } from "class-validator";
import { UploadSingleGuaranteeDto } from "./upload-single-guarantee.dto";

export class UploadMultipleGuaranteeDto {

    @ApiProperty()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => UploadSingleGuaranteeDto)
    files: UploadSingleGuaranteeDto[];

}
