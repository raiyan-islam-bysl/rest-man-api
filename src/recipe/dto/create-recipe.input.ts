import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRecipeInput {
  @Field(() => String, { description: 'Name of Recipe' })
  name: string;

  @Field(() => String, { description: 'Description of Recipe' })
  description: string;
}
