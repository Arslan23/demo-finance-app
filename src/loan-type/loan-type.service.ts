import { Injectable } from '@nestjs/common';
import { CreateLoanTypeDto } from './dto/create-loan-type.dto';
import { UpdateLoanTypeDto } from './dto/update-loan-type.dto';
import { LoanType } from './entities/loan-type.entity';


@Injectable()
export class LoanTypeService {
  async create(createLoanTypeDto: CreateLoanTypeDto) {
    const loanType = LoanType.create(createLoanTypeDto);
    await LoanType.save(loanType);
    return LoanType;
   }
 
  async showById(id: number): Promise<LoanType>
     {
         const loanType = await this.findById(id);
         return loanType;
     }
 
  async findById(id: number) {
         return await LoanType.findOne(id);
       }

  async findAll(): Promise<LoanType[]> {
        const loanType = await LoanType.find();
        return loanType;
      }
 

  update(id: number, updateLoanTypeDto: UpdateLoanTypeDto) {
    return `This action updates a #${id} typeDePret`;
  }

 async remove(id: number) {
    const loanType =  await LoanType.findOne(id);
    loanType.isDeleted = true;
    return loanType.save();
  }
}
