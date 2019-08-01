import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-front',
  templateUrl: './policy-front.component.html',
  styleUrls: ['./policy-front.component.css']
})
export class PolicyFrontComponent implements OnInit {

  title = 'app';
  public gridApi;
  public gridColumnApi;

  columnDefs = [
    {headerName: 'Ref#', field: 'ref', width: 120, cellClass: 'text-center'},
    {headerName: 'System', field: 'system', width: 120, cellClass: 'text-center' },
    {headerName: 'Company Name', field: 'companyName', width: 120, cellClass: 'text-center'},
    {headerName: 'Address', field: 'address', width: 120, cellClass: 'text-center' },
    {headerName: 'Contact Person', field: 'cPerson', width: 120, cellClass: 'text-center' },
    {headerName: 'Position', field: 'cposition', width: 120, cellClass: 'text-center'},
    {headerName: 'CP Phone', field: 'cPhone', width: 120, cellClass: 'text-center' },
    {headerName: 'Respond Person', field: 'rPerson', width: 120, cellClass: 'text-center' },
    {headerName: 'RP Phone', field: 'rPhone', width: 120, cellClass: 'text-center'},
    {headerName: 'Position', field: 'rPosition', width: 120, cellClass: 'text-center' },
    // {headerName: 'Product', field: 'product', width: 100, cellClass: 'text-center' },
    // {headerName: 'Service', field: 'service', width: 100, cellClass: 'text-center'},
  ];

  rowData = [
    { ref: 'UN/2018/14', system: 'System1', companyName: 'ktslanka(pvt)Ltd', address: 'Piliyandala', cPerson: 'M.N.C.Perera', cposition:'QA Manaager', cPhone: '+94712300897', rPerson:'S.L.Bandara',
      rPhone:'+94116789432', rPosition:'Training Manager'},
    { ref: 'MN/2018/43', system: 'System2', companyName: 'homelanka(pvt)Ltd', address: 'Kadawatha', cPerson: 'G.S.W.Gamage', cposition:'Project Manager', cPhone: '+94778922345', rPerson:'G.A.Ganepola',
      rPhone:'+94763200897', rPosition:'Manager'},
    { ref: 'UN/2018/40', system: 'System3', companyName: 'kascaLocal(pvt)Ltd', address: 'Yakkala', cPerson: 'S.A.N.Smarasekara', cposition:'System Engineer', cPhone: '+94116789432', rPerson:'L.S.Saman',
      rPhone:'+94778722345', rPosition:'Assistant'},
    { ref: 'MN/2018/12', system: 'System4', companyName: 'TkdProducts(pvt)Ltd', address: 'Miriswatte', cPerson: 'L.K.Pathirana', cposition:'Training Manager', cPhone: '+94118932567', rPerson:'M.M.Kamal',
      rPhone:'94774722345', rPosition:'QA Manaager'},
    { ref: 'MN/2018/30', system: 'System5', companyName: 'MalQuality(pvt)Ltd', address: 'Katunayake', cPerson: 'G.C.M.Silva', cposition:'QA Manager', cPhone: '+94763200897', rPerson:'A.S.Senarath',
      rPhone:'94779022345', rPosition:'System Engineer'},

  ];

  constructor() { }

  ngOnInit() {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();

    params.api.sizeColumnsToFit();
    window.addEventListener('resize', function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
      });
    });
  }

}
