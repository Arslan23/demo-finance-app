import { Injectable } from '@nestjs/common';
import { doc } from 'prettier';
import { ClaimantService } from 'src/claimant/claimant.service';
import { Claimant } from 'src/claimant/entities/claimant.entity';
import { Document } from 'src/document/entities/document.entity';
import { CreateGuaranteeDto } from 'src/guarantee/dto/create-guarantee.dto';
import { Guarantee } from 'src/guarantee/entities/guarantee.entity';
import { CreateLoanClaimantRequestDto } from './dto/create-loan-request-claimant.dto';
import { CreateLoanRequestDto } from './dto/create-loan-request.dto';
import { UpdateLoanRequestDto } from './dto/update-loan-request.dto';
import { LoanRequest } from './entities/loan-request.entity';

@Injectable()
export class LoanRequestService {
    async create(createLoanRequestDto: CreateLoanRequestDto) {
    let claimant = Claimant.create(createLoanRequestDto.claimant).save();
    createLoanRequestDto.claimant = await claimant;
    const loanRequest = LoanRequest.create(createLoanRequestDto);
    await loanRequest.save();
    return loanRequest;
   }

   async createTransaction(createLoanClaimantRequestDto: CreateLoanClaimantRequestDto, createGuaranteeDto: CreateGuaranteeDto[]) {
   /* let claimant = Claimant.create(createLoanClaimantRequestDto.claimant).save();
    createLoanClaimantRequestDto.claimant = await claimant;
    const loanRequest = await LoanRequest.create(createLoanClaimantRequestDto).save();
    if(createGuaranteeDto.length > 0)
    {
      for(var guarantee of createGuaranteeDto)
      {
          guarantee.loanRequest = await loanRequest;
          let g = await Guarantee.create(guarantee).save();
          if(guarantee.documents.length>0)
          {
            for(var doc of guarantee.documents)
            {
               doc.guarantee = g;
               await Document.create(doc).save();
            }
          }
        }
    }
   
   
    
    return loanRequest; */
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
