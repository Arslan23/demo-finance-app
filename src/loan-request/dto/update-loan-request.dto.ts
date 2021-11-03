import { PartialType } from '@nestjs/swagger';
import { CreateLoanRequestDto } from './create-loan-request.dto';

export class UpdateLoanRequestDto extends PartialType(CreateLoanRequestDto) {}
