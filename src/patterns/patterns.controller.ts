import { Body, Controller, Get, Param, Patch, Post, Put, Query, UseGuards, UsePipes } from '@nestjs/common';
import { PatternsService } from './patterns.service';
import { ValidationPipe } from "../pipes/validation.pipe";
import { CreatePatternDto } from './dto/create-pattern.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UpdatePatternDto } from './dto/update-pattern.dto';

//@ApiTags("Шаблоны")
@Controller('patterns')
export class PatternsController {
    constructor(private  patternsService: PatternsService) {}

    //@ApiOperation({summary: 'Создание шаблона'})
    @UsePipes(ValidationPipe)
    @Post('create')
    create(@Body() patternDto: CreatePatternDto ){
        return this.patternsService.createPattern(patternDto)
    }

    //@ApiOperation({summary: 'Получение шаблона'})
   // @UseGuards(JwtAuthGuard)
    //@ApiQuery({name: "id", type: Number, required:true, description: "id шаблона"})
    @Get('get')
    getPattern(@Query() pattern: {id:number}){
        return this.patternsService.findOne(pattern.id)
    }

    @Put('update')
    async updatePattern(@Body() patternDto: UpdatePatternDto, @Query() pattern: {id:number}) {
    await this.patternsService.updatePattern(patternDto, pattern.id);
    return {patternDto};
    }

    @Put('delete')
    async deletePattern(@Query() pattern: {id:number}) {
    await this.patternsService.deletePattern(pattern.id);
    return {};
    }
}
