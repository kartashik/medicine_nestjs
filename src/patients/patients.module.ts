import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { PatientsController } from './patients.controller';
import { Patient } from './patients.model';
import { PatientsService } from './patients.service';

@Module({
  controllers: [PatientsController],
  providers: [PatientsService],
  imports: [
    SequelizeModule.forFeature([Patient]),
    forwardRef(() => AuthModule),
  ],
  exports: [
    PatientsService,
  ]
})
export class PatientsModule {}
