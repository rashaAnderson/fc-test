import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { FoodNutrient } from './entities/food-nutrient.entity';

@Injectable()
export class FoodNutrientService {
  constructor(
    @InjectRepository(FoodNutrient)
    private foodNutrientRepository: Repository<FoodNutrient>,
  ) {}

  findAll(skip = 0, take = 25) {
    return this.foodNutrientRepository.find({
      skip,
      take,
    });
  }


  findFoods(foodId: number, skip = 0, take = 25) {
    return this.foodNutrientRepository.find({
      where: { foodId },
      skip,
      take,
    });
  }
}