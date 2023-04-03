import { HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';

import { MessageService } from '../message.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogDataExampleDialogComponent} from "../dialog-data-example-dialog/dialog-data-example-dialog.component";

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss'],
})
export class ModifyContentComponentComponent {
  constructor(private messageService: MessageService, public dialog: MatDialog) {}
  @Output() newContentAdded = new EventEmitter();


  openDialog() {
    const dialogRef = this.dialog.open(DialogDataExampleDialogComponent, );
    dialogRef.afterClosed().subscribe(data => {
      console.log('The dialog was closed ,' , data);
      // Create new content
      this.newContentAdded.emit(data);
    });
  }
}
