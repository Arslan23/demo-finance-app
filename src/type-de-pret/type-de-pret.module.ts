import { Module } from '@nestjs/common';
import { TypeDePretService } from './type-de-pret.service';
import { TypeDePretController } from './type-de-pret.controller';

@Module({
  controllers: [TypeDePretController],
  providers: [TypeDePretService]
})
export class TypeDePretModule {}
