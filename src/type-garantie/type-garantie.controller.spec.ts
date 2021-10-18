import { Test, TestingModule } from '@nestjs/testing';
import { TypeGarantieController } from './type-garantie.controller';
import { TypeGarantieService } from './type-garantie.service';

describe('TypeGarantieController', () => {
  let controller: TypeGarantieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeGarantieController],
      providers: [TypeGarantieService],
    }).compile();

    controller = module.get<TypeGarantieController>(TypeGarantieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
