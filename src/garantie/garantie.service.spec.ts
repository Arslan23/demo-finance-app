import { Test, TestingModule } from '@nestjs/testing';
import { GarantieService } from './garantie.service';

describe('GarantieService', () => {
  let service: GarantieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GarantieService],
    }).compile();

    service = module.get<GarantieService>(GarantieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
