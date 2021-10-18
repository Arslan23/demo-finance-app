import { Module } from '@nestjs/common';
import { TypeGarantieService } from './type-garantie.service';
import { TypeGarantieController } from './type-garantie.controller';

@Module({
  controllers: [TypeGarantieController],
  providers: [TypeGarantieService]
})
export class TypeGarantieModule {}
