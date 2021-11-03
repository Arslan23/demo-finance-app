import { Injectable } from '@nestjs/common';
import { CreateGuaranteeTypeDto } from './dto/create-guarantee-type.dto';
import { UpdateGuaranteeTypeDto } from './dto/update-guarantee-type.dto';
import { GuaranteeType } from './entities/guarantee-type.entity';

@Injectable()
export class GuaranteeTypeService {
    async create(createGuaranteeTypeDto: CreateGuaranteeTypeDto) {
    const guaranteeType = GuaranteeType.create(createGuaranteeTypeDto);
    await guaranteeType.save();
    return guaranteeType;
  }

  async findAll(): Promise<GuaranteeType[]> {
    const guaranteeType = await GuaranteeType.find();
    return guaranteeType;
  }

  async findOne(id: number) {
    return await GuaranteeType.findOne(id);
  }

  update(id: number, updateGuaranteeTypeDto: UpdateGuaranteeTypeDto) {
    return `This action updates a #${id} typeGarantie`;
  }

  async remove(id: number) {
    const guaranteeType =  await GuaranteeType.findOne(id);
    guaranteeType.isDeleted = true;
    return guaranteeType.save();
  }
}
