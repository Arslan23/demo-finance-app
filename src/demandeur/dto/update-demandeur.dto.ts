import { PartialType } from '@nestjs/swagger';
import { CreateDemandeurDto } from './create-demandeur.dto';

export class UpdateDemandeurDto extends PartialType(CreateDemandeurDto) {}
