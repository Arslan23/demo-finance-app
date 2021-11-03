import { Module } from '@nestjs/common';
import { GuaranteeTypeService } from './guarantee-type.service';
import { GuarantieTypeController } from './guarantee-type.controller';

@Module({
  controllers: [GuarantieTypeController],
  providers: [GuaranteeTypeService]
})
export class TypeGarantieModule {}
