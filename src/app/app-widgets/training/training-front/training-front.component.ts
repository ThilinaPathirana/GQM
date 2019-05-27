import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-training-front',
  templateUrl: './training-front.component.html',
  styleUrls: ['./training-front.component.css']
})
export class TrainingFrontComponent implements OnInit {

  title = 'app';

  topOptions = {alignedGrids: [], suppressHorizontalScroll: true};
  bottomOptions = {alignedGrids: [], suppressHorizontalScroll: true};

  @ViewChild('topGrid') topGrid;
  @ViewChild('bottomGrid') bottomGrid;

  columnDefsTop = [
    {headerName: 'Ref#', field: 'ref', width: 100 },
    {headerName: 'Staff No', field: 'system', width: 100 },
    {headerName: 'Name', field: 'companyName', width: 100},
    {headerName: 'Department', field: 'address', width: 100 },
    {headerName: 'Position', field: 'cPerson', width: 100  },

    // {headerName: 'Total', field: 'total', width: 100,  valueGetter: 'data.Phone + data.rPerson + data.rPosition',},

    {headerName: 'D1', field: 'Phone', width: 100  },
    {headerName: 'D2', field: 'rPerson', width: 100  },
    {headerName: 'D3', field: 'rPerson', width: 100  },
    {headerName: 'D4', field: 'rPerson', width: 100  },
    {headerName: 'Applicable', field: 'rPhone', width: 100 },
    {headerName: 'Planned', field: 'rPosition', width: 100  },
    {headerName: 'Completed from planned', field: 'product', width: 100  },
    {headerName: 'Achieve', field: 'service', width: 100 },

    {
      headerName: 'Total',
      field: 'total',
      valueGetter: 'data.gold + data.silver + data.bronze',
      width: 200
    },
    {headerName: 'Gold', field: 'gold', width: 100},
    {headerName: 'Silver', field: 'silver', width: 100},
    {headerName: 'Bronze', field: 'bronze', width: 100}
  ];

  rowDataTop = [
    { ref: 'Toyota', system: 'Celica', companyName: 'jjjjj', address: 'wdqwd', cPerson: 'dscdc', product: 'vfskvlfn' },
    { ref: 'Toyota', system: 'Celica', companyName: 'jjjjj', address: 'wdqwd', cPerson: 'dscdc', product: 'vfskvlfn' },
    { ref: 'Toyota', system: 'Celica', companyName: 'jjjjj', address: 'wdqwd', cPerson: 'dscdc', product: 'vfskvlfn' },
  ];

  bottomData = [
    {
      ref: '#Training plan',
      System: '15 - 61',
      companyName: 'Ireland',
      address: '2020',
      gold: 55,
      silver: 65,
      bronze: 12
    },
    {
      ref: '#Not achieved',
      System: '15 - 61',
      companyName: 'Ireland',
      address: '2020',
      gold: 55,
      silver: 65,
      bronze: 12
    },
    {
      ref: '#Achieved',
      System: '15 - 61',
      companyName: 'Ireland',
      address: '2020',
      gold: 55,
      silver: 65,
      bronze: 12
    },
    {
      ref: '% of Achieved',
      System: '15 - 61',
      companyName: 'Ireland',
      address: '2020',
      gold: 55,
      silver: 65,
      bronze: 12
    }

  ];



  constructor() { }
  ngOnInit() {

    this.topOptions.alignedGrids.push(this.bottomOptions);
    this.bottomOptions.alignedGrids.push(this.topOptions);

  }

}
