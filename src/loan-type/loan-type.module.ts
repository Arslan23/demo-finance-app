import { Module } from '@nestjs/common';
import { LoanTypeService } from './loan-type.service';
import { LoanTypeController } from './loan-type.controller';
import { LoanType } from './entities/loan-type.entity';

@Module({
  controllers: [LoanTypeController],
  providers: [LoanTypeService]
})
export class LoanTypeModule {}
