import { Module } from '@nestjs/common';
import { DemandePretService } from './demande-pret.service';
import { DemandePretController } from './demande-pret.controller';

@Module({
  controllers: [DemandePretController],
  providers: [DemandePretService]
})
export class DemandePretModule {}
