import { HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss'],
})
export class ModifyContentComponentComponent {
  constructor(private messageService: MessageService) {}
  @Output() newContentAdded = new EventEmitter();

  newContent: Content = {
    id: null,
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
  };

  submitNewContent() {
    // Emit event to content-list
    this.newContentAdded.emit(this.newContent);
    // Push message

    this.messageService.add('Content is successfully added')
    this.newContent = {
      id: null,
      title: '',
      description: '',
      creator: '',
      imgURL: '',
      type: '',
    };
  }
}
