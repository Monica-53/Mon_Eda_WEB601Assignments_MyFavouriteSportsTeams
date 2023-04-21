import { Component } from '@angular/core';
import { SportService } from './sport.service';
import { MessageService } from './message.service';
import { LogUpdateService } from './log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Mon_Eda_MyFavouriteSportsTeams';
  constructor(
    private sportService: SportService,
    private messageService: MessageService,
    private logService: LogUpdateService
  ) {}

  ngOnInit(): void {
    this.logService.init();
  }
  getSport(id: number) {
    let foundSport;
    this.sportService.getSport(id).subscribe((sport) => {
      foundSport = sport;
      // this.messageService.add('Content Item at id: ' + id);
    });
    return foundSport;
  }
}
