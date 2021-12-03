import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClaimantController } from './claimant/claimant.controller';
import { ClaimantModule } from './claimant/claimant.module';
import { Claimant } from './claimant/entities/claimant.entity';
import { DocumentModule } from './document/document.module';
import { DocumentController } from './document/document.controller';
import { TypeGarantieModule } from './guarantee-type/guarantee-type.module';
import { Document } from './document/entities/document.entity';
import { UsersController } from './users/users.controller';
import { ClaimantService } from './claimant/claimant.service';
import { DocumentService } from './document/document.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/users.entity';
import { UsersService } from './users/users.service';
import { LoanRequest } from './loan-request/entities/loan-request.entity';
import { LoanRequestModule } from './loan-request/loan-request.module';
import { LoanRequestService } from './loan-request/loan-request.service';
import { LoanRequestController } from './loan-request/loan-request.controller';
import { GuaranteeService } from './guarantee/guarantee.service';
import { GuaranteeController } from './guarantee/guarantee.controller';
import { Guarantee } from './guarantee/entities/guarantee.entity';
import { GuaranteeModule } from './guarantee/guarantee.module';
import { GuaranteeType } from './guarantee-type/entities/guarantee-type.entity';
import { GuaranteeTypeService } from './guarantee-type/guarantee-type.service';
import { GuarantieTypeController } from './guarantee-type/guarantee-type.controller';
import { LoanType } from './loan-type/entities/loan-type.entity';
import { LoanTypeModule } from './loan-type/loan-type.module';
import { LoanTypeService } from './loan-type/loan-type.service';
import { LoanTypeController } from './loan-type/loan-type.controller';
import { CommonController } from './common/common.controller';
import { MulterModule } from '@nestjs/platform-express';

const entities = [User, GuaranteeType, LoanType, Guarantee, Document, Claimant, LoanRequest];
@Module({
  imports: [
    MulterModule.register({
      dest: './files',
    }),
    ConfigModule.forRoot(
      {
        isGlobal: true,
      },
    ),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: entities,
      synchronize: true,
      autoLoadEntities: true,
      logging: true
    }),
    UsersModule,
    ClaimantService,
    DocumentModule,
    TypeGarantieModule,
    GuaranteeModule,
    LoanTypeModule,
    LoanRequestModule,
    AuthModule,    
  ],  
  controllers: [AppController, UsersController, ClaimantController, DocumentController, GuarantieTypeController, GuaranteeController, LoanTypeController, LoanRequestController, CommonController],
  providers: [AppService, UsersService, ClaimantService, DocumentService, GuaranteeTypeService, GuaranteeService, LoanTypeService, LoanRequestService],
})
export class AppModule {
 
}
