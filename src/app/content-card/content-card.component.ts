import { Component, Input } from '@angular/core';

import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent  {
  // item1 : Content = {
  //   id: 1,
  //   title: 'TennyKoit',
  //   description: 'It is also know as ring tennis, is an outdoor game with two player',
  //   creator: 'German origin'
  // }
  // item2 : Content = {
  //   id: 2,
  //   title: 'Tennis',
  //   description: 'Tennis is a racket sport that is played either individually against a single opponenet or between two teams of two players',
  //   creator: 'Birmingham,England'
  // }
  // item3 : Content = {
  //   id: 3,
  //   title: 'Kho Kho',
  //   description: 'It is the second most popular traditional tag game in the Indian suncontinent after Kabaddi.',
  //   creator: 'Indian subcontinent'
  // }
  //
  // myName = "Monica";
  @Input () content?: Content;

  clickPhoto (photoID: any, title: any) {
    console.log('Photo ID is ', photoID , ' and title is ', title)
  }

  // clickEvent():void{
  //   console.log(this.myList?.value)
  // }



}
