import { Component,Inject } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModifyContentComponentComponent} from "../modify-content-component/modify-content-component.component";

@Component({
  selector: 'app-dialog-data-example-dialog',
  templateUrl: './dialog-data-example-dialog.component.html',
  styleUrls: ['./dialog-data-example-dialog.component.scss']
})
export class DialogDataExampleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ModifyContentComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Content,
  ) {}
  newContent: Content = {
    id: null,
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
  };

  submitNewContent() {
    this.dialogRef.close(this.newContent);
  }

}
