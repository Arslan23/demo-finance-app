import { Test, TestingModule } from '@nestjs/testing';
import { TypeDePretService } from './type-de-pret.service';

describe('TypeDePretService', () => {
  let service: TypeDePretService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeDePretService],
    }).compile();

    service = module.get<TypeDePretService>(TypeDePretService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
