import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanAddUserComponent } from './pan-add-user.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    PanAddUserComponent,
  ],
  declarations: [
    PanAddUserComponent,
  ],
  entryComponents: [
    PanAddUserComponent,
  ],
})
export class PanAddUserModule { }
