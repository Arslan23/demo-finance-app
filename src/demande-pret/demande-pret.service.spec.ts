import { Test, TestingModule } from '@nestjs/testing';
import { DemandePretService } from './demande-pret.service';

describe('DemandePretService', () => {
  let service: DemandePretService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemandePretService],
    }).compile();

    service = module.get<DemandePretService>(DemandePretService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
