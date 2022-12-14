import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProtocolDto{
    @ApiProperty({example: "На протяжении 5 лет носит очки", description: 'Ананмнез'})
    @IsNotEmpty({message: "Анамнез обязательный"})
    @IsString({message: "Анамнез должен быть строкой"})
    readonly anamnes: string;
    readonly result: string[];
    @ApiProperty({example: "1", description: 'id-шаблона'})
    @IsNotEmpty({message: "Id-шаблона обязательное"})
    @IsNumber()
    readonly patternId: number;
    @IsNotEmpty({message: "Id-шаблона обязательное"})
    @IsNumber()
    readonly patientId: number;
}