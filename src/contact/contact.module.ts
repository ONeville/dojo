import { ContactResolver } from './contact.resolver';
import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';

@Module({
  providers: [ContactResolver, ContactService],
})
export class ContactModule {}
