import { Injectable } from '@nestjs/common';
import { ClaimantService } from 'src/claimant/claimant.service';
import { Claimant } from 'src/claimant/entities/claimant.entity';
import { CreateLoanRequestDto } from './dto/create-loan-request.dto';
import { UpdateLoanRequestDto } from './dto/update-loan-request.dto';
import { LoanRequest } from './entities/loan-request.entity';

@Injectable()
export class LoanRequestService {
    async create(createLoanRequestDto: CreateLoanRequestDto) {
    let claimant = Claimant.create(createLoanRequestDto.claimant);
    createLoanRequestDto.claimant = claimant;
    const demandePret = LoanRequest.create(createLoanRequestDto);
    await demandePret.save();
    return demandePret;
   }
 
   async showById(id: number): Promise<LoanRequest>
     {
         const demandePret = await this.findById(id);
         return demandePret;
     }

 
    async findById(id: number) {
         return await LoanRequest.findOne(id);
    }

    async findAll(): Promise<LoanRequest[]> {
      const demandePret = await LoanRequest.find();
      return demandePret;
    }


  update(id: number, updateLoanRequestDto: UpdateLoanRequestDto) {
    return `This action updates a #${id} loan request`;
  }

  async remove(id: number) {
    const loanRequest =  await LoanRequest.findOne(id);
    loanRequest.isDeleted = true;
    return loanRequest.save()
  }
}
