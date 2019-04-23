import { Injectable } from '@nestjs/common';
import { Contact } from './contact.model';
import { of } from 'rxjs';
import { ContactType } from './contact.type';

@Injectable()
export class ContactService {
  contacts: Contact[] = [
    {
      fullName: 'Admin Lukwe',
      email: 'admin@mail.com',
      phone: '+152014455',
      subject: 'Ticket #1000: Restore Account',
      message: 'Please, restore my account!',
    },
    {
      fullName: 'Morgan Teed',
      email: 'morgan.ted@mail.com',
      phone: '+156002554',
      subject: 'Ticket #10025: Mulesoft Access',
      message: 'Workshop Mulesoft at CI consulting',
    },
    {
      fullName: 'Lutther Cio',
      email: 'cio.lutte@mail.com',
      phone: '+16930022111',
      subject: 'Ticket #82000: Access Management',
      message: 'Following access management to unlock accounts',
    },
  ];

  constructor() {}

    async create(createContactDto: ContactType): Promise<Contact> {
    this.contacts.push(createContactDto);
    return of(createContactDto).toPromise();
  }

  async findAll(): Promise<Contact[]> {
    return of(this.contacts).toPromise();
  }
}
