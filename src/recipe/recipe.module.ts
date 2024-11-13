import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeService } from './recipe.service';
import { RecipeResolver } from './recipe.resolver';
import { Recipe } from './entities/recipe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe])],
  providers: [RecipeResolver, RecipeService],
})
export class RecipeModule {}
