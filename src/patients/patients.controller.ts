import { Body, Controller, Get, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreatePatientDto } from './dto/create-patient.dto';
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
  @ApiQuery({name: "userId", type: Number, required:true, description: "id пользователя"})
  @Get('getAll')
  getAllPatient(@Query() query: {userId:number}){
    return this.patientsService.getAllPatient(query.userId)
  }

}
//Лиза добавила коммент!
