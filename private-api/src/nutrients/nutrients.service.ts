import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateNutrientDto } from './dto/create-nutrient.dto';
import { UpdateNutrientDto } from './dto/update-nutrient.dto';
import { Nutrient } from './entities/nutrient.entity';

@Injectable()
export class NutrientsService {
  constructor(
    @InjectRepository(Nutrient)
    private nutrientRepository: Repository<Nutrient>,
  ) {}
  create(createNutrientDto: CreateNutrientDto) {
    return 'This action adds a new nutrient';
  }

  findAll(skip = 0, take = 25) {
    return 'This action adds a new nutrient';
  }

  findOne(id: number) {
    return this.nutrientRepository.findOneOrFail(id);
  }

  update(id: number, updateNutrientDto: UpdateNutrientDto) {
    return `This action updates a #${id} nutrient`;
  }

  remove(id: number) {
    return `This action removes a #${id} nutrient`;
  }
}
