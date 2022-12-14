import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/users.model";
import { Protocol } from "../protocol/protocols.model";

//Модель данных "Пациенты"
//Поля необходимые для создания пациента
interface PatientCreationAttrs{
  secondName: string;
  firstName: string;
  middleName: string,
  passport: string,
  dateOfBirth: Date,
  gender: number,
  phone: string,
  userId: number
}

//Таблица в бд и ее колонки
@Table({ tableName: "patients" })
export class Patient extends Model<Patient,PatientCreationAttrs> {

  @ApiProperty({example: "1", description: 'Уникальный идентификатор'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull:false })
  secondName: string;


  @Column({ type: DataType.STRING, allowNull:false })
  firstName: string;


  @Column({ type: DataType.STRING, allowNull:false })
  middleName: string;


  @Column({ type: DataType.STRING })
  passport: string;


  @Column({ type: DataType.DATE, allowNull:false })
  dateOfBirth: Date;


  @Column({ type: DataType.INTEGER, allowNull:false })
  gender: number;


  @Column({ type: DataType.STRING })
  phone: string;


  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  visibility: boolean;

  @HasMany(()=>Protocol)
  protocols: Protocol[]

}