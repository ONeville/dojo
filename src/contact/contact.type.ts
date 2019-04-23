import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class ContactType {
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
