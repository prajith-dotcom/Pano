import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { PanOaoComponent } from './pan-oao.component';
import { PanBasicInfoComponent } from './pan-basic-info/pan-basic-info.component';
import { PanFundAccountComponent } from './pan-fund-account/pan-fund-account.component';
import {
  PanContactInformationComponent,
} from './pan-contact-information/pan-contact-information.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [
    PanOaoComponent,
    PanBasicInfoComponent,
    PanFundAccountComponent,
    PanContactInformationComponent,
  ],
  entryComponents: [PanOaoComponent],
})
export class PanOaoModule { }
