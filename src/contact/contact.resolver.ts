import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ContactService } from './contact.service';
import { ContactType } from './contact.type';
import { ContactInput } from './contact.input';

@Resolver()
export class ContactResolver {
  constructor(private readonly contactService: ContactService) {}

  @Query(() => String)
  async hello() {
    return 'Hello Contact here!';
  }

  @Query(() => [ContactType])
  async contacts() {
    return this.contactService.findAll();
  }

  @Mutation(() => ContactType)
  async createContact(@Args('input') input: ContactInput) {
    return this.contactService.create(input);
  }
}
