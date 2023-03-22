import { Component } from '@angular/core';
import { Content } from "../helper-files/content-interface";
import {MYLIST} from "../helper-files/contentDb";
import {SportService} from "../sport.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  constructor(private sportService: SportService,private messageService: MessageService) {
  }

  myList: Content[] = [];

  ngOnInit() {
    this.sportService.getSports().subscribe((sportsList)=> {
      // What to do when it's done
      this.myList=sportsList;
      this.messageService.add("Content array loaded!")
    });
  }


  onNewContentAdded(data: any){
    this.myList.push((data))
  }

}




