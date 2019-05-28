import {Component, OnInit, ViewChild} from '@angular/core';
import {PerfectScrollbarConfigInterface} from "ngx-perfect-scrollbar";
import {MatDialog, MatDialogConfig} from '@angular/material';
import {TrainingChartComponent} from "../training-chart/training-chart.component";

@Component({
  selector: 'app-training-front',
  templateUrl: './training-front.component.html',
  styleUrls: ['./training-front.component.css']

})
export class TrainingFrontComponent implements OnInit {

  public isChartVisible = false;

  public popupDialog;

  public config: PerfectScrollbarConfigInterface= {
    suppressScrollX: true,
    suppressScrollY: true,
  }

  title = 'app';

  topOptions = {alignedGrids: [], suppressHorizontalScroll: true};
  bottomOptions = {alignedGrids: [], suppressHorizontalScroll: true};

  @ViewChild('topGrid') topGrid;
  @ViewChild('bottomGrid') bottomGrid;

  columnDefsTop = [
    {headerName: 'Staff No', field: 'staff_No', width: 200, },
    {headerName: 'Name', field: 'name', width: 200},
    {headerName: 'Department', field: 'department', width: 100 },
    {headerName: 'Position', field: 'position', width: 100  },

    // {headerName: 'Total', field: 'total', width: 100,  valueGetter: 'data.Phone + data.rPerson + data.rPosition',},

    {headerName: 'D1', field: 'D1', width: 50  },
    {headerName: 'D2', field: 'D2', width: 50  },
    {headerName: 'D3', field: 'D3', width: 50  },
    {headerName: 'D4', field: 'D4', width: 50  },
    {headerName: 'Applicable', field: 'applicable', width: 100 },
    {headerName: 'Planned', field: 'planned', width: 100  },
    {headerName: 'Completed from planned', field: 'cfp', width: 100  },
    {headerName: 'Achieve', field: 'achieve', width: 100 },

    // {
    //   headerName: 'Total',
    //   field: 'total',
    //   valueGetter: 'data.gold + data.silver + data.bronze',
    //   width: 200
    // },
    // {headerName: 'Gold', field: 'gold', width: 100},
    // {headerName: 'Silver', field: 'silver', width: 100},
    // {headerName: 'Bronze', field: 'bronze', width: 100}
  ];

  rowDataTop = [
    { staff_No: '64546', name: 'H.L.Samaranayake', department: 'Unit Manager', D1: '1', D2: 'n/a',D3: '1', D4: '2', applicable:'3', planned:'2', cfp: '1',achieve:'1' },
    { staff_No: '1123', name: 'K.D.gihan', department: 'Mechanic1', D1: '2', D2: '2',D3: '1', D4: '2', applicable:'4', planned:'1', cfp: '1',achieve:'1' },
    { staff_No: '2324', name: 'W.m.udesh', department: 'Mechanic2', D1: '1', D2: '1',D3: '1', D4: '2', applicable:'4', planned:'3', cfp: '2',achieve:'2' },
    { staff_No: '1233', name: 'K.M.malinda', department: 'Unit Manager', D1: '1', D2: '2',D3: '1', D4: '2', applicable:'4', planned:'3', cfp: '1',achieve:'1' },
    { staff_No: '1322', name: 'D.S.gunawardhana', department: 'Unit Manager', D1: '1', D2: 'n/a',D3: '1', D4: '2', applicable:'3', planned:'3', cfp: '2',achieve:'2' },
    { staff_No: '1223', name: 'S.M. de silva', department: 'Mechanic1', D1: '1', D2: '2',D3: '1', D4: '2', applicable:'4', planned:'4', cfp: '1',achieve:'1' },
    { staff_No: '1224', name: 'K.D.Wimasha', department: 'Mechanic1', D1: '2', D2: '2',D3: '1', D4: '2', applicable:'4', planned:'4', cfp: '3',achieve:'3' },
    { staff_No: '5688', name: 'L.K.D.waruna', department: 'Unit Manager', D1: 'n/a', D2: '1',D3: '1', D4: '2', applicable:'3', planned:'3', cfp: '2',achieve:'2' },
    { staff_No: '9876', name: 'H.M.L.Bandara', department: 'Mechanic2', D1: '2', D2: '1',D3: '1', D4: '2', applicable:'4', planned:'3', cfp: '3',achieve:'3' },
    { staff_No: '5678', name: 'P.T.U.Pathirana', department: 'Unit Manager', D1: '1', D2: '2',D3: '1', D4: 'n/a', applicable:'3', planned:'2', cfp: '2',achieve:'2' },


  ];

  bottomData = [
    {
      staff_No: '#Training planned',
      D1: '2',
      D2: '3',
      D3: '2',
      D4: '1',
      gold: 55,
      silver: 65,
      bronze: 12
    },
    {
      staff_No: '#Not achieved',
      D1: '2',
      D2: '3',
      D3: '2',
      D4: '1',
      gold: 55,
      silver: 65,
      bronze: 12
    },
    {
      staff_No: '#Achieved',
      D1: '2',
      D2: '3',
      D3: '2',
      D4: '1',
      gold: 55,
      silver: 65,
      bronze: 12
    },
    {
      staff_No: '% of Achieved',
      D1: '20%',
      D2: '30%',
      D3: '25%',
      D4: '10%',
      gold: 55,
      silver: 65,
      bronze: 12
    }

  ];



  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {

    this.topOptions.alignedGrids.push(this.bottomOptions);
    this.bottomOptions.alignedGrids.push(this.topOptions);

  }

  public showChart(): void{
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '80%';
    dialogConfig.data = '';
    dialogConfig.panelClass = 'option-chain-popup';
    this.dialog.open(TrainingChartComponent, dialogConfig);

  }

}
