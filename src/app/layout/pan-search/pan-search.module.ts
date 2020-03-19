import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanSearchRoutingModule } from './pan-search-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PanSearchComponent } from './pan-search.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PanSearchRoutingModule,
  ],
  declarations: [PanSearchComponent],
})
export class PanSearchModule { }
