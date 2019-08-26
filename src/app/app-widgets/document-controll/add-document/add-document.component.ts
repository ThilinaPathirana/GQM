import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {

  public docType = "Procedure";
  public docName = "";
  public scopeComment ="";
  public pointToFollowItems = [];
  public newValue = null;
  public newLinkedDocID;
  public newLinkedDocComnt;
  public linkedDocs = [{Id:"1234", comment:"hfwjrgwrgkwrgkjhgwhfjgjg"},{Id:"1234", comment:"hfwjrgwrgkwrgkjhgwhfjgjg"}]

  constructor() { }

  ngOnInit() {
  }

  public selectItem(itemID:any):void{

    for(let item of this.pointToFollowItems){
        item.isSelected = false;
    }
    this.pointToFollowItems[itemID].isSelected = true;
  }

  public removeItem(itemID: any){
    if(this.pointToFollowItems[itemID].isSelected){
      this.pointToFollowItems.splice(itemID,1);
    }
  }

  public addItem():void{
    if(this.newValue){
      this.pointToFollowItems.push({data: this.newValue, isSelected: false});
      this.newValue = null;

      for(let item of this.pointToFollowItems){
        item.isSelected = false;
      }
    }
  }
  public linkDoc():void{
    if(this.newLinkedDocComnt && this.newLinkedDocID){
      this.linkedDocs.push({Id: this.newLinkedDocID, comment: this.newLinkedDocComnt});
      this.newLinkedDocID = null;
      this.newLinkedDocComnt = null;
    }
  }

}
