import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    //  TODO: send the message_after_fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES); // of(HEROES) 会返回一个 Observable<Hero[]>，它会发出单个值，这个值就是这些模拟英雄的数组。
  }
}
