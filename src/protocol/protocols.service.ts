import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProtocolDto } from './dto/create-protocol.dto';
import { Protocol } from './protocols.model';

@Injectable()
export class ProtocolsService {
    constructor(@InjectModel(Protocol) private protocolRepository: typeof Protocol) {
    }
    async createProtocol(dto: CreateProtocolDto) {
        return await this.protocolRepository.create(dto);
    }
    async getProtocol(id: number) {
        return await this.protocolRepository.findByPk(id);
    }
    async findOne(id: number) {
        return await this.protocolRepository.findAll({
            where: {
                id: id
            }
        });
    }
}
