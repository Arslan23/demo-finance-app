import { Test, TestingModule } from '@nestjs/testing';
import { TypeGarantieService } from './type-garantie.service';

describe('TypeGarantieService', () => {
  let service: TypeGarantieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeGarantieService],
    }).compile();

    service = module.get<TypeGarantieService>(TypeGarantieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
