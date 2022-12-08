import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './patients.model';

@Injectable()
export class PatientsService {
    constructor(@InjectModel(Patient) private patientRepository: typeof Patient) {
    }
  
    async createPatient(dto: CreatePatientDto) {
      return await this.patientRepository.create(dto);
    }
  
    async getPatient(id: number) {
      return await this.patientRepository.findAll({
        where: {
          id: id,
          visibility:true
        }
      });
    }
  
    async getAllPatient(userId: number) {
      return await this.patientRepository.findAll({
        where: {
          userId: userId,
          visibility:true
        }
      });
    }

    async updatePatient(dto:UpdatePatientDto, id: number){
      const updateData: any = {};
      if (typeof dto.secondName !== 'undefined') {
        updateData.secondName = dto.secondName;
      }
      if (typeof dto.firstName !== 'undefined') {
      updateData.firstName = dto.firstName;
      }
      if (typeof dto.middleName !== 'undefined') {
    updateData.middleName = dto.middleName;
      }     
      if (typeof dto.passport !== 'undefined') {
        updateData.passport = dto.passport;
      }
      if (typeof dto.dateOfBirth !== 'undefined') {
      updateData.dateOfBirth = dto.dateOfBirth;
      }
      if (typeof dto.gender !== 'undefined') {
    updateData.gender = dto.gender;
      }
      if (typeof dto.phone !== 'undefined') {
  updateData.phone = dto.phone;
      }
      if (typeof dto.userId !== 'undefined') {
  updateData.userId = dto.userId;
      }
      return await this.patientRepository.update(updateData, {where:{id: id, visibility: true}});
    }

    async deletePatient( id: number){
      const deleteData: any = {};
      deleteData.visibility = false;
      return await this.patientRepository.update(deleteData,
        { where: {id:id, visibility: true}});}

}
