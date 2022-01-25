import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Food } from './entities/food.entity';
import { FoodsController } from './foods.controller';
import { FoodsService } from './foods.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';

const mockRepository = jest.fn(() => ({
  metadata: {
    columns: ['id'],
    relations: [],
  },
  save: jest.fn(),
  findOneOrFail: jest.fn(() => FoodsService),
  find: jest.fn(() => FoodsService),
  create: jest.fn(() => FoodsService),
  update: jest.fn(() => FoodsService),
  delete: jest.fn(() => FoodsService),
}));

describe('FoodsController', () => {
  let controller: FoodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodsController],
      providers: [
        FoodsService,
        { provide: getRepositoryToken(Food), useClass: mockRepository },
      ],
    }).compile();

    controller =  module.get<FoodsController>(FoodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should execute findOne function', () => {
    expect(controller.findOne(1)).toBeDefined();
  });

  it('should execute findAll function', () => {
    expect(controller.findAll("search",1,25)).toBeDefined();
  });

  it('should execute create function', () => {
    const dto = new CreateFoodDto();
    expect(() => controller.create(dto)).not.toThrow();
  });

  it('should execute update function', () => {
    const dto = new UpdateFoodDto();
    expect(() => controller.update(1, dto)).not.toThrow();
  });

  it('should execute remove function', () => {
    expect(controller.remove(1)).toBeDefined();
  });

});
