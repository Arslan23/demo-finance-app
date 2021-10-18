import { PartialType } from '@nestjs/swagger';
import { CreateTypeGarantieDto } from './create-type-garantie.dto';

export class UpdateTypeGarantieDto extends PartialType(CreateTypeGarantieDto) {}
