import { Component,Output,EventEmitter} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  newContent : Content = {
    id: 0,
    title: '',
    description :'',
    creator: '',
    imgURL: '',
    type: ''
  };

  errorMessage = '';
  @Output() newContentAdded = new EventEmitter();

  submitNewContent() {
    const ourPromise = new Promise((success, fail) => {
      let testPass = true;
      if (testPass) {
        success(this.newContent);
      } else {
        fail("Failure :(");
      }
    });

    ourPromise
      .then((successResult) => {
        console.log('Success add new content');
        // Emit event so content list component knows about new content item
        this.newContentAdded.emit(successResult);
        // Clear
        this.newContent = {
          id: 0,
          title: '',
          description :'',
          creator: '',
          imgURL: '',
          type: ''
        }
        this.errorMessage = '';
      })
      .catch((failResult) => {
        console.log(failResult);
        // Show error if fail
        this.errorMessage = failResult;
      })
  }
}













