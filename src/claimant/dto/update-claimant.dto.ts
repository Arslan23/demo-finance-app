import { PartialType } from '@nestjs/swagger';
import { CreateClaimantDto } from './create-claimant.dto';

export class UpdateClaimantDto extends PartialType(CreateClaimantDto) {}
