import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AgGridModule } from "ag-grid-angular";
import { FormsModule } from "@angular/forms";
import { ProcessComponent } from "./process/process.component";
import { StoreComponent } from "./store/store.component";
import { WorksheetComponent } from "./worksheet/worksheet.component";
import { TracibilityRoutingModule } from "./tracibility-routing.module";
import { SuppliersComponent } from "./suppliers/suppliers.component";
import { SupplierRegistrationComponent } from "./supplier-registration/supplier-registration.component";
import { AddProcessStepsComponent } from "./add-process-steps/add-process-steps.component";
import { ProcessDetailComponent } from "./process-detail/process-detail.component";
import { AddProcessComponent } from "./add-process/add-process.component";
import { FinalStoreComponent } from "./final-store/final-store.component";
import { FinalWorkSheetComponent } from "./final-work-sheet/final-work-sheet.component";
import { WorkSheetDetailComponent } from "./work-sheet-detail/work-sheet-detail.component";
import { ProcessStepDetailComponent } from "./process-step-detail/process-step-detail.component";
import { AddItemsComponent } from './add-items/add-items.component';
import { SupplierProductsComponent } from './supplier-products/supplier-products.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { SupplierProductsListComponent } from './supplier-products-list/supplier-products-list.component';

@NgModule({
  imports: [
    TracibilityRoutingModule,
    AgGridModule.withComponents([]),
    FormsModule,
    CommonModule
  ],
  declarations: [
    ProcessComponent,
    StoreComponent,
    WorksheetComponent,
    SuppliersComponent,
    SupplierRegistrationComponent,
    AddProcessStepsComponent,
    ProcessDetailComponent,
    AddProcessComponent,
    FinalStoreComponent,
    FinalWorkSheetComponent,
    WorkSheetDetailComponent,
    ProcessStepDetailComponent,
    AddItemsComponent,
    SupplierProductsComponent,
    ItemListComponent,
    ViewItemComponent,
    SupplierProductsListComponent,
  ],
})
export class TracibilityModule {}
