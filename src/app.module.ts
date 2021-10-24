import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemandeurController } from './demandeur/demandeur.controller';
import { DemandeurModule } from './demandeur/demandeur.module';
import { Demandeur } from './demandeur/entities/demandeur.entity';
import { DocumentModule } from './document/document.module';
import { DocumentController } from './document/document.controller';
import { TypeGarantieModule } from './type-garantie/type-garantie.module';
import { GarantieModule } from './garantie/garantie.module';
import { TypeDePretModule } from './type-de-pret/type-de-pret.module';
import { DemandePretModule } from './demande-pret/demande-pret.module';
import { DemandePret } from './demande-pret/entities/demande-pret.entity';
import { Garantie } from './garantie/entities/garantie.entity';
import { TypeGarantie } from './type-garantie/entities/type-garantie.entity';
import { TypeDePret } from './type-de-pret/entities/type-de-pret.entity';
import { Document } from './document/entities/document.entity';
import { UsersController } from './users/users.controller';
import { TypeGarantieController } from './type-garantie/type-garantie.controller';
import { TypeDePretController } from './type-de-pret/type-de-pret.controller';
import { GarantieController } from './garantie/garantie.controller';
import { DemandePretController } from './demande-pret/demande-pret.controller';
import { DemandeurService } from './demandeur/demandeur.service';
import { DocumentService } from './document/document.service';
import { TypeGarantieService } from './type-garantie/type-garantie.service';
import { GarantieService } from './garantie/garantie.service';
import { TypeDePretService } from './type-de-pret/type-de-pret.service';
import { DemandePretService } from './demande-pret/demande-pret.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/users.entity';
import { UsersService } from './users/users.service';

const entities = [User, TypeGarantie, TypeDePret, Garantie, Document, Demandeur, DemandePret];
@Module({
  imports: [
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
    DemandeurModule,
    DocumentModule,
    TypeGarantieModule,
    GarantieModule,
    TypeDePretModule,
    DemandePretModule,
    AuthModule,    
  ],  
  controllers: [AppController, UsersController, DemandeurController, DocumentController, TypeGarantieController, GarantieController, TypeDePretController, DemandePretController],
  providers: [AppService, UsersService, DemandeurService, DocumentService, TypeGarantieService, GarantieService, TypeDePretService, DemandePretService],
})
export class AppModule {
    
}
