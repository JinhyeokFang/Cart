import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { nullable: true })
  id: number;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => Int, { nullable: true })
  password: number;
}
