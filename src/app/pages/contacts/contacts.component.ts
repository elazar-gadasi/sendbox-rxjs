import { Component, OnInit } from '@angular/core';
import { from, fromEvent, Observable, take } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [],
})
export class ContactsComponent implements OnInit {
  clickObservable$: Observable<Event> = fromEvent(document, 'click');
  counter: number = 1;
  users$: Observable<User> = from([
    {
      firstName: 'elazar',
      lastName: 'gadasi',
      age: 28,
      phone: '0589878345',
      email: 'elazar@gmail.com',
    },
    {
      firstName: 'eli',
      lastName: 'gadasi',
      age: 28,
      phone: '0589878345',
      email: 'elazar@gmail.com',
    },
    {
      firstName: 'elad',
      lastName: 'gadasi',
      age: 28,
      phone: '0589878345',
      email: 'elazar@gmail.com',
    },
  ]);
  user: User | void = undefined;
  constructor() {}

  ngOnInit(): void {
    this.users$.pipe(take(1)).subscribe((data) => {
      console.log(data);
      this.user = data;
    });
    this.clickObservable$.subscribe(() =>
      console.log(this.counter++ + ' הדום נלחץ!!! פעם ')
    );
  }
}
interface User {
  firstName: string;
  lastName: string;
  age: number;
  phone: string;
  email: string;
}
