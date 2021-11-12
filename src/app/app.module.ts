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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
