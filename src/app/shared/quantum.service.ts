import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuantumService {
  constructor(private http: HttpClient, private router: Router) {}

  public QuantumType: string = '';

  //default return observable
  defaultReturn!: Observable<any>;

  //function to add Quantum Resources Manpower Admin
  addQuantumResourcesManpowerAdmin(
    data: any,
    importMonth: any
  ): Observable<any> {
    return this.http.post(
      environment.apiBaseUrl + '/quantum/resourcesManpowerAdmin',
      {
        data: data,
        importMonth: importMonth,
      }
    );
  }

  //function to get Quantum Resources Manpower Admin
  getQuantumResourcesManpowerAdmin(
    startDate: any,
    endDate: any
  ): Observable<any> {
    return this.http.post(
      environment.apiBaseUrl + '/quantum/resourcesManpowerAdmin/get',
      {
        startDate: startDate,
        endDate: endDate,
      }
    );
  }

  //general function to import data
  importQuantumData(data: any, importMonth: any): Observable<any> {
    if (this.QuantumType == 'ResourcesManpowerAdmin') {
      return this.addQuantumResourcesManpowerAdmin(data, importMonth);
    } else {
      return this.defaultReturn;
    }
  }

  //general function to preview data
  previewQuantumData(startDate: any, endDate: any): Observable<any> {
    startDate = new Date(startDate).toDateString();
    endDate = new Date(endDate).toDateString();

    if (this.QuantumType == 'ResourcesManpowerAdmin') {
      return this.getQuantumResourcesManpowerAdmin(startDate, endDate);
    } else {
      return this.defaultReturn;
    }
  }

  setQuantumType(quantumType: string) {
    this.QuantumType = quantumType;
  }
}
