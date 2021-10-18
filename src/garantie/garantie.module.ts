import { Module } from '@nestjs/common';
import { GarantieService } from './garantie.service';
import { GarantieController } from './garantie.controller';

@Module({
  controllers: [GarantieController],
  providers: [GarantieService]
})
export class GarantieModule {}
