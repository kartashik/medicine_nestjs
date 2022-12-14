import { Body, Controller, Get, Param, Patch, Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateProtocolDto } from './dto/create-protocol.dto';
import { UpdateProtocolDto } from './dto/update-protocol.dto';
import { Protocol } from './protocols.model';
import { ProtocolsService } from './protocols.service';

//@ApiTags("Протоколы")
@Controller('protocol')
export class ProtocolsController {
    constructor(private  protocolsService: ProtocolsService) {}
    
    //@ApiOperation({summary: 'Создание протокола'})
    @UsePipes(ValidationPipe)
    @Post('create')
    create(@Body() protocolDto: CreateProtocolDto ){
        return this.protocolsService.createProtocol(protocolDto)
    }

    //@ApiOperation({summary: 'Получение протокола'})
    //@UseGuards(JwtAuthGuard)
    //@ApiQuery({name: "id", type: Number, required:true, description: "id протокола"})


    @Get('get')
    findOne(@Query() protocol: {id:number}) {
        return this.protocolsService.findOne(protocol.id)
    }
    @Get('getAll')
    findAll(@Query() protocol: {id:number}) {
        return this.protocolsService.findAll(protocol.id)
    }
    

    //@ApiOperation({summary: 'Изменение пациента'})
    //@ApiResponse({status: 200, type: Protocol})
    @Put('update')
    async updateProtocol(@Query() protocol: {id:number}, @Body() protocolDto: UpdateProtocolDto){
        await this.protocolsService.updateProtocol(protocolDto, protocol.id);
    return {protocolDto};
    }


    @Put('delete')
    async deletePattern(@Query() protocol: {id:number}) {
    await this.protocolsService.deletePattern(protocol.id);
    return {};
    }
}
