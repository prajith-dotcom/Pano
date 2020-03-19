import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { PanNavbarComponent } from '../shared/components/pan-navbar/pan-navbar.component';
import { SharedModule } from '../shared/shared.module';
import { PanAddUserModule } from '../shared/components/pan-add-user/pan-add-user.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PanAddUserModule,
    LayoutRoutingModule,
  ],
  declarations: [
    LayoutComponent,
    PanNavbarComponent,
  ],
  exports: [
    SharedModule,
  ],
})
export class LayoutModule { }
