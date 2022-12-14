import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsInt, IsString, Length } from "class-validator";

export class CreatePatientDto{
  @ApiProperty({example: "Семёнова", description: 'Фамилия пользователя'})
  @IsString({message: "Должно быть строкой"})
  readonly secondName: string;
  @ApiProperty({example: "Елизавета", description: 'Имя пользователя'})
  @IsString({message: "Должно быть строкой"})
  readonly firstName: string;
  @ApiProperty({example: "Андреевна", description: 'Отчество пользователя'})
  @IsString({message: "Должно быть строкой"})
  readonly middleName: string;
  @ApiProperty({example: "1234 567890", description: 'Паспорт пользователя'})
  @IsString({message: "Должно быть строкой"})
  readonly passport: string;
  @ApiProperty({example: "2000.12.20", description: 'Дата рождения пользователя'})
  @IsString({message: "Должно быть датой"})
  readonly dateOfBirth: Date;
  @ApiProperty({example: "1", description: 'Пол пользователя 1 - м, 0 - ж'})
  @IsInt({message: "Должно быть числом"})
  readonly gender: number;
  @ApiProperty({example: "89096387223", description: 'Телефон пользователя'})
  @IsString({message: "Должно быть строкой"})
  readonly phone: string;
}