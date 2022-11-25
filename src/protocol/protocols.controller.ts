import { Body, Controller, Get, Param, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateProtocolDto } from './dto/create-protocol.dto';
import { ProtocolsService } from './protocols.service';

@ApiTags("Протоколы")
@Controller('protocol')
export class ProtocolsController {
    constructor(private  protocolsService: ProtocolsService) {}
    
    @ApiOperation({summary: 'Создание протокола'})
    @UsePipes(ValidationPipe)
    @Post('create')
    create(@Body() protocolDto: CreateProtocolDto ){
        return this.protocolsService.createProtocol(protocolDto)
    }

    @ApiOperation({summary: 'Получение протокола'})
    //@UseGuards(JwtAuthGuard)
    @ApiQuery({name: "id", type: Number, required:true, description: "id протокола"})
    @Get('get')
    getProtocol(@Query() query: {id:number}){
        return this.protocolsService.getProtocol(query.id)
    }
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.protocolsService.getProtocol(id)
    }
}
