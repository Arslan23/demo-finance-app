import { Module } from '@nestjs/common';
import { GuaranteeService } from './guarantee.service';
import {  GuaranteeController } from './guarantee.controller';

@Module({
  controllers: [GuaranteeController],
  providers: [GuaranteeService]
})
export class GuaranteeModule {}
