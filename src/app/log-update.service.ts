import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class LogUpdateService {
  constructor(private updates: SwUpdate, private _snackBar: MatSnackBar) {}

  public init() {
    console.log("10")
    this.updates.versionUpdates.subscribe((event) => {
      switch (event.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading new app version:
    ${event.version.hash}`);
          break;
        case 'VERSION_READY':
          const updater = this.updates;
          console.log("19")
          //here show update snackbar
          const mySnackBar = this._snackBar.open('update newversion', 'update');
          mySnackBar.onAction().subscribe(() => {
            updater.activateUpdate().then(() => {
              document.location.reload();
            });
          });
          break;
      }
    });
  }
}
