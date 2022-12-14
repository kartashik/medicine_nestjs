import { Body, Controller, Get, Param, Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { identity } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './patients.model';
import { PatientsModule } from './patients.module';
import { PatientsService } from './patients.service';

@ApiTags("Пациенты")
@Controller('patients')
export class PatientsController {
    constructor(private  patientsService: PatientsService) {}

  @ApiOperation({summary: 'Создание пациента'})
  @ApiResponse({status: 200, type: Patient})
  @UsePipes(ValidationPipe)
  @Post('create')
  create(@Body() patientDto: CreatePatientDto ){
    return this.patientsService.createPatient(patientDto)
  }

  @ApiOperation({summary: 'Получение пациента'})
  @ApiResponse({status: 200, type: Patient})
  @ApiQuery({name: "id", type: Number, required:true, description: "id пациента"})
  @Get('get')
  getPatient(@Query() query: {id:number}){
    return this.patientsService.getPatient(query.id)

  }

  @ApiOperation({summary: 'Получение всех пациентов'})
  @ApiResponse({status: 200, type: Patient})
  @Get('getAll')
  getAllPatient(){
    return this.patientsService.getAllPatient()
  }
  @ApiOperation({summary: 'Изменение пациента'})
  @ApiResponse({status: 200, type: Patient})
  @Put('update')
  async update(@Query() patient: {id:number},@Body() patientDto: UpdatePatientDto){
    await this.patientsService.updatePatient(patientDto, patient.id);
   return {patientDto};
  }
  @ApiOperation({summary: 'Удаление пациента'})
  @ApiResponse({status: 200, type: Patient})
  @Put('delete')
  async delete(@Query() patient: {id:number}){
    await this.patientsService.deletePatient(patient.id);
   return {};
  }
  

}


//Лиза добавила коммент!
