import { Module } from '@nestjs/common';
import { DemandeurService } from './demandeur.service';
import { DemandeurController } from './demandeur.controller';

@Module({
  controllers: [DemandeurController],
  providers: [DemandeurService]
})
export class DemandeurModule {}
