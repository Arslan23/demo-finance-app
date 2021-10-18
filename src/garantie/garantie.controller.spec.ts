import { Test, TestingModule } from '@nestjs/testing';
import { GarantieController } from './garantie.controller';
import { GarantieService } from './garantie.service';

describe('GarantieController', () => {
  let controller: GarantieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GarantieController],
      providers: [GarantieService],
    }).compile();

    controller = module.get<GarantieController>(GarantieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
