import { Component } from '@angular/core';
import {userSettings} from '../../../app-config/user-settings';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material';
import {WorkInstrDialogComponent} from '../work-instr-dialog/work-instr-dialog.component';

@Component({
  selector: 'app-work-instr',
  templateUrl: './work-instr.component.html',
  styleUrls: ['./work-instr.component.scss']
})
export class WorkInstrComponent {

  public menuItems: Array<any> = userSettings.workingInstrItems;
  private activeListItem: any;
  private activeCheckboxElem: any;
  private executionDialogRef: MatDialogRef<WorkInstrDialogComponent>;
  constructor(private routerr: Router, private dialog: MatDialog) { }

  public panelButtonClicked(item?: any, isMainNav?: boolean): void {
    // TODO: [Amila] review and do below change only for mobiles
    // if (item && item.config && !item.config.url) {
    // 	return;
    // }
    if (isMainNav) {
      if (this.activeListItem && this.activeListItem.active) {
        this.activeListItem.active = false;
      }
      item.active = true;
      this.activeListItem = item;
    }
    if (!item.subItems) {
      this.executionDialogRef = this.dialog.open(WorkInstrDialogComponent, {
        width: '450px',
        height: '350px',
        data: {
          config: item.config,
        },
      });
    }
  }

  public menuItemSelected(checkboxElem: any): void {
    if (this.activeCheckboxElem === checkboxElem) {
      return;
    }

    if (this.activeCheckboxElem && this.activeCheckboxElem.target.checked) {
      this.activeCheckboxElem.target.checked = false;
    }

    if (checkboxElem.target.checked) {
      this.activeCheckboxElem = checkboxElem;
    } else {
      this.activeCheckboxElem = null;
    }
  }

}
