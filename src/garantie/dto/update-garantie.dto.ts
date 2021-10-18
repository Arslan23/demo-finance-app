import { PartialType } from '@nestjs/swagger';
import { CreateGarantieDto } from './create-garantie.dto';

export class UpdateGarantieDto extends PartialType(CreateGarantieDto) {}
