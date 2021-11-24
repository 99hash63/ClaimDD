import { Injectable } from '@angular/core';
import { Cp } from './cp.model';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Claimant } from './claimant.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CpService {
  selectedCp: Cp = {
    nameOfDefendant: '',
    contractRef: '',
    currency: '',
    originalContractPrice: 0,
    durationUnit: '',
    originalContractDuration: 0,
    commencementDate: new Date(),
    workingHours: 0,
    claimCause: [''],
    projectStatus: '',
    latestAmendmentReference: '',
    revisedContractPrice: 0,
    revisedContractDuration: 0,
    project: '',
  };
  constructor(private http: HttpClient, private router: Router) {}

  //function to get add contract particular
  addContractParticular(cpService: CpService): Observable<any> {
    return this.http.post(
      environment.apiBaseUrl + '/contractParticulars',
      cpService
    );
  }
}
