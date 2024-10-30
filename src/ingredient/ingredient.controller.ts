import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { Ingredient } from './entities/ingredient.entity';

@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Get()
  async findAll(): Promise<Ingredient[]> {
    return this.ingredientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Ingredient> {
    return this.ingredientService.findOne(id);
  }

  @Post()
  async create(@Body() ingredient: Partial<Ingredient>): Promise<Ingredient> {
    return this.ingredientService.create(ingredient);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() ingredient: Partial<Ingredient>,
  ): Promise<Ingredient> {
    return this.ingredientService.update(id, ingredient);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.ingredientService.remove(id);
  }
}
