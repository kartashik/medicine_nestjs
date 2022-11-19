import { BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Patient } from "../patients/patients.model";
import { Pattern } from "src/patterns/patterns.model";

//Модель данных "Протокол"
//Поля необходимые для создания протокола
interface ProtocolCreationAttrs{
  anamnes: string;
  result: string;
  patternId: number;
}

//Таблица в бд и ее колонки
@Table({ tableName: "protocols" })
export class Protocol extends Model<Protocol,ProtocolCreationAttrs> {

  @ApiProperty({example: "1", description: 'Уникальный идентификатор'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW})
  date: Date;

  @Column({ type: DataType.STRING})
  anamnes: string;

  @Column({ type: DataType.STRING, allowNull:false })
  result: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  visibility: boolean;

  @ForeignKey(() => Pattern)
  @Column({ type: DataType.INTEGER})
  patternId: number;

  @ForeignKey(() => Patient)
  @Column({ type: DataType.INTEGER})
  patientId: number;

  @BelongsTo(() => Patient)
  patient: Patient;

  @BelongsTo(() => Pattern)
  pattern: Pattern;
  
}