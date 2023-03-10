import { Component } from '@angular/core';
import { Content } from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  myList: Content[] = [
    {
      id: 1,
      title: 'TennyKoit',
      creator: 'German Origin',
      description: 'It is also know as ring tennis, is an outdoor game with two player',
      imgURL: "",
      type: 'outdoor',
      tags: ['india', 'easy game']

    },

    {
      id: 2,
      title: 'Tennis',
      creator: 'a1',
      description: 'Tennis is a racket sport that is played either individually against a single opponenet or between two teams of two players\',',
      imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tennis_Racket_and_Balls.jpg/220px-Tennis_Racket_and_Balls.jpg",
      tags: ['india', 'easy game']
    },

    {
      id: 3,
      title: 'Kho Kho',
      creator: 'Indian subcontinent',
      description: 'It is the second most popular traditional tag game in the Indian suncontinent after Kabaddi',
      imgURL:"",
      type: 'indoor',
      tags: ['india', 'easy game']
      ,

    },
    {
      id: 4,
      title: 'Soccer',
      creator: 'England',
      description: 'is a team sport played between two teams of 11 players ',
      type: 'outdoor',
      tags: ['india', 'difficult game']
    },
    {
      id: 5,
      title: 'BasketBall',
      creator: 'US',
      description: 'Two teams of five players each try to score by shooting a ball through a hoop elevated 10 feet above the ground',
      type: 'indoor',
      tags: ['india', 'easy game']
    },
    {
      id: 6,
      title: 'Cricket',
      creator: 'South East England',
      description: 'is a bat-and-ball game played between two teams of eleven players on a field ',
      tags: ['india', 'difficult game']
    },
    {
      id: 7,
      title: 'Chess',
      creator: 'Spain',
      description: 'Chess is a board game between two players.  ',
      imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKFMQQNvQovh_lGJnxhfcNRXUgIsaaoa9CGg&usqp=CAU",
      type: 'indoor',
      tags: ['india', 'difficult game']
    }
  ]

  onNewContentAdded(data: any){
    this.myList.push((data))
  }
}




