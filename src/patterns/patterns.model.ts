import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Protocol } from "../protocol/protocols.model";

//Модель данных "Шаблон"
//Поля необходимые для создания шаблона
interface PatternCreationAttrs{
  content: string;
}

//Таблица в бд и ее колонки
@Table({ tableName: "patterns" })
export class Pattern extends Model<Pattern,PatternCreationAttrs> {

  @ApiProperty({example: "1", description: 'Уникальный идентификатор'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false})
  content: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  visibility: boolean;

  @HasMany(()=>Protocol)
  protocols: Protocol[]

}