import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-common-doc-table',
  templateUrl: './common-doc-table.component.html',
  styleUrls: ['./common-doc-table.component.css']
})
export class CommonDocTableComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  @Input() public rowData = [];
  @Input() columnDefs = [];

  constructor() { }

  ngOnInit() {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit()

    params.api.sizeColumnsToFit();
    window.addEventListener('resize', function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
      });
    });
  }

  getContextMenuItems(params) {
    const result = [
      {
        name: 'Alert ' + params.value,
        action: function () {
          window.alert('Alerting about ' + params.value);
        },
        cssClasses: ['redFont', 'bold']
      },
      {
        name: 'Always Disabled',
        disabled: true,
        tooltip: 'Very long tooltip, did I mention that I am very long, well I am! Long!  Very Long!'
      },
      {
        name: 'Country',
        subMenu: [
          {
            name: 'Ireland',
            action: function () {
              console.log('Ireland was pressed');
            },
          },
          {
            name: 'UK',
            action: function () {
              console.log('UK was pressed');
            },
          },
          {
            name: 'France',
            action: function () {
              console.log('France was pressed');
            },
          }
        ]
      },
      {
        name: 'Person',
        subMenu: [
          {
            name: 'Niall',
            action: function () {
              console.log('Niall was pressed');
            }
          },
          {
            name: 'Sean',
            action: function () {
              console.log('Sean was pressed');
            }
          },
          {
            name: 'John',
            action: function () {
              console.log('John was pressed');
            }
          },
          {
            name: 'Alberto',
            action: function () {
              console.log('Alberto was pressed');
            }
          },
          {
            name: 'Tony',
            action: function () {
              console.log('Tony was pressed');
            }
          },
          {
            name: 'Andrew',
            action: function () {
              console.log('Andrew was pressed');
            }
          },
          {
            name: 'Kev',
            action: function () {
              console.log('Kev was pressed');
            }
          },
          {
            name: 'Will',
            action: function () {
              console.log('Will was pressed');
            }
          },
          {
            name: 'Armaan',
            action: function () {
              console.log('Armaan was pressed');
            }
          }
        ]
      },
      'separator',
      {
        name: 'Windows',
        shortcut: 'Alt + W',
        action: function () {
          console.log('Windows Item Selected');
        },
        icon: '<img src="../images/skills/windows.png"/>'
      },
      {
        name: 'Mac',
        shortcut: 'Alt + M',
        action: function () {
          console.log('Mac Item Selected');
        },
        icon: '<img src="../images/skills/mac.png"/>'
      },
      'separator',
      {
        name: 'Checked',
        checked: true,
        action: function () {
          console.log('Checked Selected');
        },
        icon: '<img src="../images/skills/mac.png"/>'
      },
      'copy',
      'separator',
      'chartRange'
    ];
    return result;
  }
}
