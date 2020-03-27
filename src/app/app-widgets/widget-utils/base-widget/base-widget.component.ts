import {
  AfterViewInit,
  Component,
  HostBinding,
  Injector,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, QueryList,
  SimpleChanges,
  TemplateRef,
  ViewChild, ViewChildren,
} from '@angular/core';
@Component({
  selector: 'app-base-widget',
  templateUrl: './base-widget.component.html',
  styleUrls: ['./base-widget.component.css']
})
export class BaseWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
