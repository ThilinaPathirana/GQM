import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.css']
})
export class DialogPopupComponent implements OnInit {

  public headerStyle = ''

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    if(this.data.type === 'error'){
      this.headerStyle = 'error'
    } else{
      this.headerStyle = 'success'
    }
  }

}
