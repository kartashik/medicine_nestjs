import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePatternDto{
    //@ApiProperty({example: "Осторота зрения на правом глазу без корр._число;Осторота зрения на правом глазу с корр._число;Осторота зрения на левом глазу без корр._число;", description: 'содержание шаблона'})
    @IsNotEmpty({message: "Содержание обязательно"})
    @IsString({message: "Содержание должно быть строкой"})
    readonly name: string;
    readonly content: string[];
}