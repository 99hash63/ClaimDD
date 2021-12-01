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

  public importQuantumType: string = '';

  //default return observable
  defaultReturn!: Observable<any>;

  //function to add Financial particular
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

  importQuantumData(data: any, importMonth: any): Observable<any> {
    console.log(this.importQuantumType);

    if (this.importQuantumType == 'ResourcesManpowerAdmin') {
      console.log('yaaaaaaaaaaaaaaaaaaaaaaas');

      return this.addQuantumResourcesManpowerAdmin(data, importMonth);
    } else {
      console.log('noooooooooooooooooooooooooooo');

      return this.defaultReturn;
    }
  }

  setImportQuantumType(importQuantumType: string) {
    this.importQuantumType = importQuantumType;
  }
}
