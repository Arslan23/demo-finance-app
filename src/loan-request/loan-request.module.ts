import { Module } from '@nestjs/common';
import { LoanRequestController } from './loan-request.controller';
import { LoanRequestService } from './loan-request.service';

@Module({
  controllers: [LoanRequestController],
  providers: [LoanRequestService]
})
export class LoanRequestModule {}
