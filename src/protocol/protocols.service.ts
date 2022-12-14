import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProtocolDto } from './dto/create-protocol.dto';
import { UpdateProtocolDto } from './dto/update-protocol.dto';
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
                id: id,
                visibility:true
            }
        });
    }
  async findAll(id: number) {
    return await this.protocolRepository.findAll({
      where: {
        patientId: id,
        visibility:true
      }
    });
  }

      async updateProtocol(dto: UpdateProtocolDto, id: number ) {
        const updateData: any = {};
        if (typeof dto.anamnes !== 'undefined') {
            updateData.anamnes = dto.anamnes;
        }
        if (typeof dto.patternId !== 'undefined') {
            updateData.patternId = dto.patternId;
        }
        if (typeof dto.result !== 'undefined') {
            updateData.result = dto.result;
        }
        return await this.protocolRepository.update(updateData, {where:{id: id, visibility: true}});
    }


    async deletePattern(id: number ) {
        const deleteData: any = {};
        deleteData.visibility = false;
        return await this.protocolRepository.update(deleteData, {where:{id:id, visibility:true}});
    }
}
