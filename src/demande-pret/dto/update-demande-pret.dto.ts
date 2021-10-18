import { PartialType } from '@nestjs/swagger';
import { CreateDemandePretDto } from './create-demande-pret.dto';

export class UpdateDemandePretDto extends PartialType(CreateDemandePretDto) {}
