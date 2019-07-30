import { Component, OnInit } from '@angular/core';

const TITLE_LIST = ["Proprietor","Factory Manager", "Quality Assurance  Manager", "R & D Unit", "Marketing" ];
const FOLLOW_UP_PRE = [
  "Minutes/actions of previous meeting",
  "ISO 22000: 2005 certification Status",
  "Manual, policy and procedures status (ISO 22000- 2005)",
  "Relevant communications from interested parties; Customer feedback"
]

@Component({
  selector: 'app-add-meeting-record',
  templateUrl: './add-meeting-record.component.html',
  styleUrls: ['./add-meeting-record.component.css']
})
export class AddMeetingRecordComponent implements OnInit {

  public date;

  public data: string[] = ['bd123', 'ab132', 'ba211', 'cb321', 'tr123', 'qw221', 'nm654', 'km988', 'bn213', 'kl213'];
  public placeHolder = "Names";
  public popupHeight:string = '200px';
  public popupWidth:string = '250px';

  public titleList = TITLE_LIST;

  public newFollowUps = [];
  public newFollowItem;
  public itemFollowupSelected = false;

  public topics = [
    {topic:"Follow up from previous meeting Responsible",items:[], newValue:null},
    {topic:"Process performance summaries on Quality, Health and Safety, Food Safety and Environment",items:[], newValue:null},
    {topic:"Customer Feedback, Satisfaction,  Complaints, Nonconformity, Status on corrective & preventive actions",items:[], newValue:null}];

  constructor() { }

  ngOnInit() {
    this.addPreValues()
  }

  public addPreValues():void{
    for (let item of FOLLOW_UP_PRE){
      this.topics[0].items.push({item:item, isSelected:false});
    }
  }

  public addItem(topicID:any):void{
    if(this.topics[topicID].newValue){
    this.topics[topicID].items.push({item:this.topics[topicID].newValue, isSelected: false});
      this.topics[topicID].newValue = null;
      // for(let item of this.newFollowUps){
      //   item.isSelected = false;
      // }

      for(let topic of this.topics){
        for(let item of topic.items){
          item.isSelected = false;
        }
      }
    }
  }

  public selectItem(itemID:any, topicId:any):void{
    for(let topic of this.topics){
      for(let item of topic.items){
        item.isSelected = false;
      }
    }

    this.topics[topicId].items[itemID].isSelected = true;
    // this.newFollowUps[itemID].isSelected = true;
  }

  public removeItem(itemID: any,topicID:any){

    if(this.topics[topicID].items[itemID].isSelected){
      this.topics[topicID].items.splice(itemID,1);
    }

    // if(this.newFollowUps[itemID].isSelected){
    //   this.newFollowUps.splice(item,1);
    // }
  }

}
