import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WAheaderComponent } from './components/waheader/waheader.component';
import { WAfooterComponent } from './components/wafooter/wafooter.component';
import { WASidenavComponent } from './components/wasidenav/wasidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContractParticularsComponent } from './components/contract-particulars/contract-particulars.component';
import { FinancialParticularsComponent } from './components/financial-particulars/financial-particulars.component';
import { EventsComponent } from './components/events/events.component';
import { RatesComponent } from './components/rates/rates.component';
import { QuantumComponent } from './components/quantum/quantum.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { ClaimComponent } from './components/claim/claim.component';
import { ReportComponent } from './components/report/report.component';
import { ContemporaryRecordsComponent } from './components/contemporary-records/contemporary-records.component';
import { CpOriginalComponent } from './components/contract-particulars/cp-original/cp-original.component';
import { CpAmendmentComponent } from './components/contract-particulars/cp-amendment/cp-amendment.component';
import { CpConditionsComponent } from './components/contract-particulars/cp-conditions/cp-conditions.component';
import { RatePreviewComponent } from './components/rates/rate-preview/rate-preview.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './shared/user.service';
import { ClaimantService } from './shared/claimant.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataImportComponent } from './components/data-import/data-import.component';
import { PreviewQuantumComponent } from './components/preview-quantum/preview-quantum.component';

@NgModule({
  declarations: [
    AppComponent,
    WAheaderComponent,
    WAfooterComponent,
    WASidenavComponent,
    DashboardComponent,
    ContractParticularsComponent,
    FinancialParticularsComponent,
    EventsComponent,
    RatesComponent,
    QuantumComponent,
    EvaluationComponent,
    ClaimComponent,
    ReportComponent,
    ContemporaryRecordsComponent,
    CpOriginalComponent,
    CpAmendmentComponent,
    CpConditionsComponent,
    RatePreviewComponent,
    DataImportComponent,
    PreviewQuantumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons),
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuard,
    // CookieService,
    UserService,
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
