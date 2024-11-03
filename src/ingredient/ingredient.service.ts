import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredient } from './entity/ingredient.entity';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}

  async findAll(): Promise<Ingredient[]> {
    return await this.ingredientRepository.find();
  }

  async findOne(id: number): Promise<Ingredient> {
    return await this.ingredientRepository.findOneBy({ id });
  }

  async create(ingredient: Partial<Ingredient>): Promise<Ingredient> {
    const newIngredient = this.ingredientRepository.create(ingredient);
    return await this.ingredientRepository.save(newIngredient);
  }

  async update(
    id: number,
    ingredient: Partial<Ingredient>,
  ): Promise<Ingredient> {
    await this.ingredientRepository.update(id, ingredient);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.ingredientRepository.softDelete(id);
  }

  async destroy(id: number): Promise<void> {
    await this.ingredientRepository.delete(id);
  }
}
