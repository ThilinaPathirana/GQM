import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopLevelManualsComponent} from "./top-level-manuals/top-level-manuals.component";
import {DocumetControlLayoutComponent} from "./documet-control-layout/documet-control-layout.component";
import {Mgts1LayoutComponent} from "../scope/mgts1-layout/mgts1-layout.component";
import {Mgts1Component} from "../scope/mgts1/mgts1.component";
import {PdfViewerComponent} from "./pdf-viewer/pdf-viewer.component";
import {ProceduresComponent} from "./procedures/procedures.component";
import {ProductionRecordComponent} from "./production-record/production-record.component";
import {WorkInstructionsComponent} from "./work-instructions/work-instructions.component";
import {MasterListComponent} from "./master-list/master-list.component";
import {AddDocumentComponent} from "./add-document/add-document.component";
import {EditDocumentComponent} from "./edit-document/edit-document.component";


const routes: Routes = [
  {path: 'MasterList', component: DocumetControlLayoutComponent ,
    children: [
      {path: '', component: MasterListComponent, outlet: 'outlet1'},
    ]
  },
  {path: 'TopLevelManuals', component: DocumetControlLayoutComponent ,
    children: [
  {path: '', component: TopLevelManualsComponent, outlet: 'outlet1'},
]
},
  {path: 'Procedures', component: DocumetControlLayoutComponent ,
    children: [
      {path: '', component: ProceduresComponent, outlet: 'outlet1'},
    ]
  },
  {path: 'ProductionRecords', component: DocumetControlLayoutComponent ,
    children: [
      {path: '', component: ProductionRecordComponent, outlet: 'outlet1'},
    ]
  },
  {path: 'WorkInstructions', component: DocumetControlLayoutComponent ,
    children: [
      {path: '', component: WorkInstructionsComponent, outlet: 'outlet1'},
    ]
  },
  {path: 'addDoc/:docType', component: DocumetControlLayoutComponent ,
    children: [
      {path: '', component: AddDocumentComponent, outlet: 'outlet1'},
    ]
  },
  {path: 'editDoc/:id', component: DocumetControlLayoutComponent ,
    children: [
      {path: '', component: EditDocumentComponent, outlet: 'outlet1'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentControllRoutingModule { }
