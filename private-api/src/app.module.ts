import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FoodsModule } from './foods/foods.module';
import { NutrientsModule } from './nutrients/nutrients.module';
import { UserFoodsModule } from './user-foods/user-foods.module';
import { FoodNutrientModule } from './food-nutrients/food-nutrient.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    UserFoodsModule,
    FoodsModule,
    NutrientsModule,
    FoodNutrientModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
