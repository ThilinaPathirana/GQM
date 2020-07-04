import { NgModule } from "@angular/core";
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

@NgModule({
  imports: [
    TracibilityRoutingModule,
    AgGridModule.withComponents([]),
    FormsModule,
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
  ],
})
export class TracibilityModule {}
