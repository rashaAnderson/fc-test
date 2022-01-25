import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
    Query,
    HttpCode,
  } from '@nestjs/common';
  import { FoodNutrientService } from './food-nutrient.service';
  import { PaginationHelper } from '../../libs/pagination-helper';

  @Controller('foodNutrients')
export class FoodNutrientController {
  constructor(private readonly foodNutrientService: FoodNutrientService) {}

  @Get()
  findAll(@Query('page') page: number, @Query('limit') limit: number) {
    const { skip, take } = PaginationHelper.getSkipTake(page, limit);
    return this.foodNutrientService.findAll(skip, take);
  }



  @Get(':foodId')
  findFoods(
    @Param('foodId') foodId: number,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    const { skip, take } = PaginationHelper.getSkipTake(page, limit);
    return this.foodNutrientService.findFoods(foodId, skip, take);
  }
}


