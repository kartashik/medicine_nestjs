import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Pattern } from './patterns.model';
import { CreatePatternDto } from "./dto/create-pattern.dto";


@Injectable()
export class PatternsService {
    constructor(@InjectModel(Pattern) private patternRepository: typeof Pattern) {
    }
    async createPattern(dto: CreatePatternDto) {
        return await this.patternRepository.create(dto);
    }
    async getPattern(id: number) {
        return await this.patternRepository.findByPk(id);
    }
    async findOne(id: number) {
        return await this.patternRepository.findAll({
            where: {
                id: id
            }
        });
    }
}
