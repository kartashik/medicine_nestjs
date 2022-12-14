import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateProtocolDto{
    @ApiProperty({example: "На протяжении 5 лет носит очки", description: 'Ананмнез'})
    @IsNotEmpty({message: "Анамнез обязательный"})
    @IsString({message: "Анамнез должен быть строкой"})
    anamnes: string;
    result: string[];
    @ApiProperty({example: "1", description: 'id-шаблона'})
    @IsNotEmpty({message: "Id-шаблона обязательное"})
    @IsNumber()
    patternId: number;
    @IsNotEmpty({message: "Id-шаблона обязательное"})
    @IsNumber()
    readonly patientId: number;
}