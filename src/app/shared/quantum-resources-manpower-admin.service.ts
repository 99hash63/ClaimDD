import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QuantumResourcesManpowerAdmin } from './quantum-resources-manpower-admin.model';

@Injectable({
  providedIn: 'root',
})
export class QuantumResourcesManpowerAdminService {
  quantumResourcesManpowerAdmin!: QuantumResourcesManpowerAdmin;
  constructor(private http: HttpClient, private router: Router) {}

  //function to add Financial particular
  addQuantumResourcesManpowerAdmin(
    data: any,
    importMonth: any
  ): Observable<any> {
    console.log('hi');
    console.log(data);
    return this.http.post(
      environment.apiBaseUrl + '/quantum/resourcesManpowerAdmin',
      {
        data: data,
        importMonth: importMonth,
      }
    );
  }
}
