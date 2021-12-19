import { Injectable } from '@nestjs/common';
import { ClaimantService } from 'src/claimant/claimant.service';
import { Claimant } from 'src/claimant/entities/claimant.entity';
import { Guarantee } from 'src/guarantee/entities/guarantee.entity';
import { CreateLoanRequestDto } from './dto/create-loan-request.dto';
import { UpdateLoanRequestDto } from './dto/update-loan-request.dto';
import { LoanRequest } from './entities/loan-request.entity';
import { rename, mkdirSync } from 'fs';
import { Connection } from 'typeorm';

@Injectable()
export class LoanRequestService {
  constructor(private connection: Connection) { }

  async create(createLoanRequestDto: CreateLoanRequestDto) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let claimant = Claimant.create(createLoanRequestDto.claimant).save();
      let savedClaimant = await claimant;
      createLoanRequestDto.claimant = savedClaimant;

      const loanRequest = LoanRequest.create(createLoanRequestDto);
      await loanRequest.save();

      // Save guarantees
      let guarantees = createLoanRequestDto.guarantee;
      guarantees.forEach(element => {
        // Move file from tmp
        //let oldPath = element[1].replace("\\", "/");
        let newPath = process.env.GUARANTEE_PATH + savedClaimant.firstname + "_" + savedClaimant.lastname + "_" + savedClaimant.id;
        mkdirSync(newPath, { recursive: true })
        newPath += "/" + element[2];
        rename(element[1], newPath, (err) => {
          console.log(err);
          // todo: handle error
        })

        Guarantee.create({
          loanRequest: loanRequest,
          guaranteeType: element[0],
          path: newPath
        }).save();
      });

      //await queryRunner.commitTransaction();

      return loanRequest;
    } catch (err) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
    
  }

  async showById(id: number): Promise<LoanRequest> {
    const loanRequest = await this.findById(id);
    return loanRequest;
  }


  async findById(id: number) {
    return await LoanRequest.findOne(id);
  }

  async findAll(): Promise<LoanRequest[]> {
    const loanRequest = await LoanRequest.find();
    return loanRequest;
  }


  update(id: number, updateLoanRequestDto: UpdateLoanRequestDto) {
    return `This action updates a #${id} loan request`;
  }

  async remove(id: number) {
    const loanRequest = await LoanRequest.findOne(id);
    loanRequest.isDeleted = true;
    return loanRequest.save()
  }
}
