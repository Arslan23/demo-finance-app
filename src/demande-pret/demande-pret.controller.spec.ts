import { Test, TestingModule } from '@nestjs/testing';
import { DemandePretController } from './demande-pret.controller';
import { DemandePretService } from './demande-pret.service';

describe('DemandePretController', () => {
  let controller: DemandePretController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemandePretController],
      providers: [DemandePretService],
    }).compile();

    controller = module.get<DemandePretController>(DemandePretController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
