import { InputType, Field } from 'type-graphql';

@InputType()
export class ContactInput {
  @Field()
  fullName: string;
  @Field()
  email: string;
  @Field()
  phone: string;
  @Field()
  subject: string;
  @Field()
  message: string;
}
