import { Module } from '@nestjs/common';
import { FoodNutrientService } from './food-nutrient.service';
import { FoodNutrientController } from './food-nutrient.controller';
import { FoodNutrient } from './entities/food-nutrient.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FoodNutrient])],
  controllers: [FoodNutrientController],
  providers: [FoodNutrientService],
})
export class FoodNutrientModule {}