import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { MessageService } from './message.service';
import { MYLIST } from './helper-files/contentDb';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SportService {
  private SPORTS: Content[] = MYLIST;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getSports(): Observable<Content[]> {
    // const sports = of(this.SPORTS);
    // this.messageService.add('SportService: fetched sports');
    // return sports;
    return this.http.get<Content[]>('api/content');
  }

  // write function that take an ID number and return that sport matched id number
  getSport(id: number): Observable<Content | undefined> {
    let foundSport;

    for (let item of this.SPORTS) {
      if (item.id == id) {
        //if current item.id is same as the id
        //if that staement is true then assign a value
        foundSport = item;
      }
    }
    return of(foundSport);
  }

  addContent(newContentItem: Content): Observable<Content> {
    // It will call in Memorydataservice
    return this.http.post<Content>('api/content',newContentItem, this.httpOptions);
  }
}
