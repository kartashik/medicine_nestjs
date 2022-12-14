import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class UpdatePatientDto{
  @ApiProperty({example: "Семёнова", description: 'Фамилия пользователя'})
  @IsString({message: "Должно быть строкой"})
   secondName: string;
  @ApiProperty({example: "Елизавета", description: 'Имя пользователя'})
  @IsString({message: "Должно быть строкой"})
   firstName: string;
  @ApiProperty({example: "Андреевна", description: 'Отчество пользователя'})
  @IsString({message: "Должно быть строкой"})
   middleName: string;
  @ApiProperty({example: "1234 567890", description: 'Паспорт пользователя'})
  @IsString({message: "Должно быть строкой"})
   passport: string;
  @ApiProperty({example: "2000.12.20", description: 'Дата рождения пользователя'})
  @IsString({message: "Должно быть датой"})
   dateOfBirth: Date;
  @ApiProperty({example: "1", description: 'Пол пользователя 1 - м, 0 - ж'})
  @IsString({message: "Должно быть числом"})
   gender: number;
  @ApiProperty({example: "89096387223", description: 'Телефон пользователя'})
  @IsString({message: "Должно быть строкой"})
   phone: string;
}