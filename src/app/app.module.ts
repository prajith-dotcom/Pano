/** Components */
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {
  PanInlineMaintenanceModule,
} from './shared/components/pan-inline-maintenance/pan-inline-maintenance.module';
import { PanAccountsModule } from './shared/components/pan-accounts/pan-accounts.module';
import {
  PanTransactionsModule,
 } from './shared/components/pan-transactions/pan-transactions.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './guards/auth.guard';
import { UserService } from './shared/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    LayoutModule,
    SharedModule,
    PanInlineMaintenanceModule,
    PanAccountsModule,
    PanTransactionsModule,
  ],
  providers: [AuthGuard, UserService],
  exports: [SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
