import { Test, TestingModule } from '@nestjs/testing';
import { TypeDePretController } from './type-de-pret.controller';
import { TypeDePretService } from './type-de-pret.service';

describe('TypeDePretController', () => {
  let controller: TypeDePretController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeDePretController],
      providers: [TypeDePretService],
    }).compile();

    controller = module.get<TypeDePretController>(TypeDePretController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
