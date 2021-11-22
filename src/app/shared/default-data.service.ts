import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Claimant } from './claimant.model';
import { Observable } from 'rxjs';
import { DefaultData } from './default-data.model';
@Injectable({
  providedIn: 'root',
})
export class DefaultDataService {
  public defaultData: DefaultData[] = [];
  constructor(private http: HttpClient, private router: Router) {}

  //function to get all default data
  getDefaultData(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + '/defaultData');
  }
}
