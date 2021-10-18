import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
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
import { UsersService } from './users/users.service';
import { DemandeurService } from './demandeur/demandeur.service';
import { DocumentService } from './document/document.service';
import { TypeGarantieService } from './type-garantie/type-garantie.service';
import { GarantieService } from './garantie/garantie.service';
import { TypeDePretService } from './type-de-pret/type-de-pret.service';
import { DemandePretService } from './demande-pret/demande-pret.service';


@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: null,
        database: 'dbasevf',
        entities: [User, TypeGarantie, TypeDePret, Garantie, Document, Demandeur, DemandePret ],
        synchronize: true,
        autoLoadEntities: true,
        logging: true
       }
    ),
    UsersModule,
    DemandeurModule,
    DocumentModule,
    TypeGarantieModule,
    GarantieModule,
    TypeDePretModule,
    DemandePretModule,    
  ],  
  controllers: [AppController, UsersController, DemandeurController, DocumentController, TypeGarantieController, GarantieController, TypeDePretController, DemandePretController],
  providers: [AppService, UsersService, DemandeurService, DocumentService, TypeGarantieService, GarantieService, TypeDePretService, DemandePretService],
})
export class AppModule {
    
}
