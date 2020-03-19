import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { SlidePanelModule } from '../shared/utils/pan-slide-panel/slide-panel.module';
import { PanRegisterModule } from '../shared/components/pan-register/pan-register.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SlidePanelModule,
    PanRegisterModule,
  ],
  exports: [
    SlidePanelModule,
  ],
  declarations: [LoginComponent],
})
export class LoginModule { }
