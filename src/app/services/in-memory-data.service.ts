import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MYLIST } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    // setting it to the value of our array of content
    const content: Content[] = MYLIST;
    return { content };
  }

  genId(content: Content[]): number {
    return content.length > 0
      ? Math.max(...content.map((c) => (c.id != null ? c.id : 1000))) + 1
      : 2000;
  }
}
