import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';
import { CreatePatientDto } from './dto/create-patient.dto';
import { Patient } from './patients.model';

@Injectable()
export class PatientsService {
    constructor(@InjectModel(Patient) private patientRepository: typeof Patient) {
    }
  
    async createPatient(dto: CreatePatientDto) {
      return await this.patientRepository.create(dto);
    }
  
    async getPatient(id: number) {
      return await this.patientRepository.findByPk(id);
    }
  
    async getAllPatient(userId: number) {
      return await this.patientRepository.findAll({
        where: {
          userId: userId
        }
      });
    }

}
