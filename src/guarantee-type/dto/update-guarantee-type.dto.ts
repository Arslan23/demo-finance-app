import { PartialType } from '@nestjs/swagger';
import { CreateGuaranteeTypeDto } from './create-guarantee-type.dto';

export class UpdateGuaranteeTypeDto extends PartialType(CreateGuaranteeTypeDto) {}
