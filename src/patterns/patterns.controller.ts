import { Body, Controller, Get, Param, Post, Query, UseGuards, UsePipes } from '@nestjs/common';
import { PatternsService } from './patterns.service';
import { ValidationPipe } from "../pipes/validation.pipe";
import { CreatePatternDto } from './dto/create-pattern.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags("Шаблоны")
@Controller('patterns')
export class PatternsController {
    constructor(private  patternsService: PatternsService) {}

    @ApiOperation({summary: 'Создание шаблона'})
    @UsePipes(ValidationPipe)
    @Post('create')
    create(@Body() patternDto: CreatePatternDto ){
        return this.patternsService.createPattern(patternDto)
    }

    @ApiOperation({summary: 'Получение шаблона'})
   // @UseGuards(JwtAuthGuard)
    @ApiQuery({name: "id", type: Number, required:true, description: "id шаблона"})
    @Get('get')
    getPattern(@Query() query: {id:number}){
        return this.patternsService.getPattern(query.id)
    }
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.patternsService.getPattern(id)
    }

}
