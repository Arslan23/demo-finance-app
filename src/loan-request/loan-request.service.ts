import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { ClaimantService } from 'src/claimant/claimant.service';
import { Claimant } from 'src/claimant/entities/claimant.entity';
import { Guarantee } from 'src/guarantee/entities/guarantee.entity';
import { CreateLoanRequestDto } from './dto/create-loan-request.dto';
import { UpdateLoanRequestDto } from './dto/update-loan-request.dto';
import { LoanRequest } from './entities/loan-request.entity';
import { rename, mkdirSync, renameSync } from 'fs';
import { Connection } from 'typeorm';
import { LoanType } from 'src/loan-type/entities/loan-type.entity';

@Injectable()
export class LoanRequestService {
  constructor(private connection: Connection) { }

  async create(createLoanRequestDto: CreateLoanRequestDto) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      console.log("createLoanRequestDto");
      console.log(createLoanRequestDto);
      let claimant = await queryRunner.manager.save(Claimant.create(createLoanRequestDto.claimant));
      createLoanRequestDto.claimant = claimant;

      let guaranteeType = createLoanRequestDto.guaranteeType;

      const loanRequest = await queryRunner.manager.save(LoanRequest.create(createLoanRequestDto));
      await queryRunner.manager.update(LoanRequest, {id: loanRequest.id}, {loantype: createLoanRequestDto.loanType});

      // Save guarantees
      /*let guarantees = createLoanRequestDto.guarantee;
      await Promise.all(
        guarantees.map(async element => {
          // Move file from tmp
          //let oldPath = element[1].replace("\\", "/");
          let newPath = process.env.GUARANTEE_PATH + claimant.firstname + "_" + claimant.lastname + "_" + claimant.id;
          mkdirSync(newPath, { recursive: true })
          newPath += "/" + element[1];
          renameSync(element[0], newPath)
  
          await queryRunner.manager.save(Guarantee.create({
            loanRequest: loanRequest,
            guaranteeType: guaranteeType,
            path: newPath
          }));
  
        })
      );*/

      await queryRunner.commitTransaction();

      return loanRequest;
    } catch (err) {
      // since we have errors lets rollback the changes we made
      console.log(err);
      await queryRunner.rollbackTransaction();
      throw err;
      //throw new InternalServerErrorException();
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
