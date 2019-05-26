import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-front',
  templateUrl: './training-front.component.html',
  styleUrls: ['./training-front.component.css']
})
export class TrainingFrontComponent implements OnInit {

  title = 'app';

  columnDefs = [
    {headerName: 'Ref#', field: 'ref', width: 100 },
    {headerName: 'Staff No', field: 'system', width: 100 },
    {headerName: 'Name', field: 'companyName', width: 100},
    {headerName: 'Department', field: 'address', width: 100 },
    {headerName: 'Position', field: 'cPerson', width: 100  },
    {headerName: 'D1', field: 'Phone', width: 100  },
    {headerName: 'D2', field: 'rPerson', width: 100  },
    {headerName: 'D3', field: 'rPerson', width: 100  },
    {headerName: 'D4', field: 'rPerson', width: 100  },
    {headerName: 'Applicable', field: 'rPhone', width: 100 },
    {headerName: 'Planned', field: 'rPosition', width: 100  },
    {headerName: 'Completed from planned', field: 'product', width: 100  },
    {headerName: 'Achieve', field: 'service', width: 100 },
  ];

  rowData = [
    { ref: 'Toyota', system: 'Celica', companyName: 'jjjjj', address: 'wdqwd', cPerson: 'dscdc', product: 'vfskvlfn' },
    { ref: 'Toyota', system: 'Celica', companyName: 'jjjjj', address: 'wdqwd', cPerson: 'dscdc', product: 'vfskvlfn' },
    { ref: 'Toyota', system: 'Celica', companyName: 'jjjjj', address: 'wdqwd', cPerson: 'dscdc', product: 'vfskvlfn' },
  ];
  constructor() { }
  ngOnInit() {
  }

}
