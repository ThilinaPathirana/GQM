import {
  FormatArrowForBidAskDifPipe,
} from './pipes';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FormatArrowForBidAskDifPipe,
  ],
  providers: [
  ],
  exports: [
    FormatArrowForBidAskDifPipe,
  ],
})
export class PipesModule { }
