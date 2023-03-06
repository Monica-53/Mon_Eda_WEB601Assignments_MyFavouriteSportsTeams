import { Component} from '@angular/core';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  letourPromise = new Promise((success, fail) => {
    let testPass = true;
    if (testPass) {
      success("Success was achieved!");
    } else {
      fail("Failure :(");
    }
    ourPromise.then(successResult =>
      console.log(successResult))
      .catch(failResult => console.log(failResult))
  })
}









