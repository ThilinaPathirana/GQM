import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-front',
  templateUrl: './policy-front.component.html',
  styleUrls: ['./policy-front.component.css']
})
export class PolicyFrontComponent implements OnInit {

  title = 'app';

  columnDefs = [
    {headerName: 'Ref#', field: 'ref', width: 100 },
    {headerName: 'System', field: 'system', width: 100 },
    {headerName: 'Company Name', field: 'companyName', width: 100},
    {headerName: 'Address', field: 'address', width: 100 },
    {headerName: 'Contact Person', field: 'cPerson' },
    {headerName: 'Position', field: 'position'},
    {headerName: 'Phone 1', field: 'Phone' },
    {headerName: 'Respond Person', field: 'rPerson' },
    {headerName: 'Phone', field: 'rPhone'},
    {headerName: 'Position', field: 'rPosition' },
    {headerName: 'Product', field: 'product' },
    {headerName: 'Service', field: 'service'},
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
