import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProtocolDto{
    @ApiProperty({example: "На протяжении 5 лет носит очки", description: 'Ананмнез'})
    @IsNotEmpty({message: "Анамнез обязательный"})
    @IsString({message: "Анамнез должен быть строкой"})
    readonly anamnes: string;
    @ApiProperty({example: "0.75;0.65;0.85;", description: 'содержание шаблона'})
    @IsNotEmpty({message: "Результат обязательный"})
    @IsString({message: "Результат должен быть строкой"})
    readonly result: string; 
    @ApiProperty({example: "1", description: 'id-шаблона'})
    @IsNotEmpty({message: "Id-шаблона обязательное"})
    @IsNumber()
    readonly patternId: number;
}