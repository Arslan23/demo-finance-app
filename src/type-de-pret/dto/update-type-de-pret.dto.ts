import { PartialType } from '@nestjs/swagger';
import { CreateTypeDePretDto } from './create-type-de-pret.dto';

export class UpdateTypeDePretDto extends PartialType(CreateTypeDePretDto) {}
