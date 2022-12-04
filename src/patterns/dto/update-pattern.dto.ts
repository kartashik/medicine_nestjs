//import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdatePatternDto{
    @IsNotEmpty({message: "Содержание обязательно"})
    @IsString({message: "Содержание должно быть строкой"})
    content: string;
}