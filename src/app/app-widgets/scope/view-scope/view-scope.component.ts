import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-view-scope',
  templateUrl: './view-scope.component.html',
  styleUrls: ['./view-scope.component.scss']
})
export class ViewScopeComponent implements OnInit {

  title = 'app';

  columnDefs = [
    {headerName: 'Ref#', field: 'ref', width: 100, cellClass: 'text-center'},
    {headerName: 'System', field: 'system', width: 100, cellClass: 'text-center' },
    {headerName: 'Company Name', field: 'companyName', width: 100, cellClass: 'text-center'},
    {headerName: 'Address', field: 'address', width: 100, cellClass: 'text-center' },
    {headerName: 'Contact Person', field: 'cPerson', width: 100, cellClass: 'text-center' },
    {headerName: 'Position', field: 'cposition', width: 100, cellClass: 'text-center'},
    {headerName: 'CP Phone', field: 'cPhone', width: 100, cellClass: 'text-center' },
    {headerName: 'Respond Person', field: 'rPerson', width: 100, cellClass: 'text-center' },
    {headerName: 'RP Phone', field: 'rPhone', width: 100, cellClass: 'text-center'},
    {headerName: 'Position', field: 'rPosition', width: 100, cellClass: 'text-center' },
    {headerName: 'Product', field: 'product', width: 100, cellClass: 'text-center' },
    {headerName: 'Service', field: 'service', width: 100, cellClass: 'text-center'},
  ];

  rowData = [
    { ref: 'Toyota', system: 'Celica', companyName: 'jjjjj', address: 'wdqwd', cPerson: 'dscdc', cposition:'gsw', cPhone: '112233', rPerson:'fkgfdk',
      rPhone:'11445', rPosition:'hkjffdhk',product: 'vfskvlfn', service: 'dhfhuhs' },
    { ref: 'Toyota', system: 'Celica', companyName: 'jjjjj', address: 'wdqwd', cPerson: 'dscdc', cposition:'gsw', cPhone: '112233', rPerson:'fkgfdk',
      rPhone:'11445', rPosition:'hkjffdhk',product: 'vfskvlfn', service: 'dhfhuhs' },
    { ref: 'Toyota', system: 'Celica', companyName: 'jjjjj', address: 'wdqwd', cPerson: 'dscdc', cposition:'gsw', cPhone: '112233', rPerson:'fkgfdk',
      rPhone:'11445', rPosition:'hkjffdhk',product: 'vfskvlfn', service: 'dhfhuhs' },
    { ref: 'Toyota', system: 'Celica', companyName: 'jjjjj', address: 'wdqwd', cPerson: 'dscdc', cposition:'gsw', cPhone: '112233', rPerson:'fkgfdk',
      rPhone:'11445', rPosition:'hkjffdhk',product: 'vfskvlfn', service: 'dhfhuhs' },
    { ref: 'Toyota', system: 'Celica', companyName: 'jjjjj', address: 'wdqwd', cPerson: 'dscdc', cposition:'gsw', cPhone: '112233', rPerson:'fkgfdk',
      rPhone:'11445', rPosition:'hkjffdhk',product: 'vfskvlfn', service: 'dhfhuhs' },

  ];

  ngOnInit() {

  }

}
