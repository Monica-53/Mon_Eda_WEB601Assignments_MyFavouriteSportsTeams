import { Component } from '@angular/core';
import {Content} from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon_Eda_MyFavouriteSportsTeams';

  contentItem:Content ={
    id:1024,
    description: 'some desc',
    creator: 'some guy',
    title: 'some title',
    imgURL: "https://angular.io/assests/images/logos/angular/angular.png"
  }
}
