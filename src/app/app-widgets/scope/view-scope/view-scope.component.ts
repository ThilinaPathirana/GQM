import {Component, OnInit} from '@angular/core';
import {TradeService} from '../../../app-backend/trade/trade.service';
import {TradeRequests} from '../../../app-constants/enums/trade-meta/trade-requests.enum';
import {TradeBackends} from '../../../app-constants/enums/trade-backends.enum';

@Component({
  selector: 'app-view-scope',
  templateUrl: './view-scope.component.html',
  styleUrls: ['./view-scope.component.scss']
})
export class ViewScopeComponent implements OnInit {

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

  constructor(public tradeService: TradeService) { }

  ngOnInit() {

  }

}
