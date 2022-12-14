import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Pattern } from './patterns.model';
import { CreatePatternDto } from "./dto/create-pattern.dto";
import { UpdatePatternDto } from './dto/update-pattern.dto';


@Injectable()
export class PatternsService {
    constructor(@InjectModel(Pattern) private patternRepository: typeof Pattern) {
    }
    async createPattern(dto: CreatePatternDto) {
        return await this.patternRepository.create(dto);
    }

    async findOne(id: number) {
        return await this.patternRepository.findAll({
            where: {
                id: id,
                visibility:true
            }
        });
    }
    async findAll(){
        return await this.patternRepository.findAll({
            where: {
                visibility:true
            }
        });
    }
    async updatePattern(dto: UpdatePatternDto, id: number ) {
        const updateData: any = {};
        if (typeof dto.content !== 'undefined') {
            updateData.content = dto.content;
        }
        return await this.patternRepository.update(updateData, {where:{id: id, visibility: true}});
    }
    async deletePattern(id: number ) {
        const deleteData: any = {};
        deleteData.visibility = false;
        return await this.patternRepository.update(deleteData, {where:{id:id, visibility:true}});
    }
}
