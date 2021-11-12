import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { RatePreviewComponent } from './components/rates/rate-preview/rate-preview.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'contract-particulars',
    component: ContractParticularsComponent,
    pathMatch: 'full',
  },
  {
    path: 'financial-particulars',
    component: FinancialParticularsComponent,
    pathMatch: 'full',
  },
  {
    path: 'events',
    component: EventsComponent,
    pathMatch: 'full',
  },
  {
    path: 'rates',
    component: RatesComponent,
    pathMatch: 'full',
  },
  {
    path: 'quantum',
    component: QuantumComponent,
    pathMatch: 'full',
  },
  {
    path: 'evaluation',
    component: EvaluationComponent,
    pathMatch: 'full',
  },
  {
    path: 'claim',
    component: ClaimComponent,
    pathMatch: 'full',
  },
  {
    path: 'report',
    component: ReportComponent,
    pathMatch: 'full',
  },
  {
    path: 'contemporary-records',
    component: ContemporaryRecordsComponent,
    pathMatch: 'full',
  },
  {
    path: 'rate-preview',
    component: RatePreviewComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
