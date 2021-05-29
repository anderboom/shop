import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NovaposhtaService {
  constructor(private http: HttpClient) {}

  public getAreas(): Observable<any> {
    return this.http.post(environment.apiEndPoint, {
      apiKey: environment.apiKey,
      modelName: 'Address',
      calledMethod: 'getAreas',
      methodProperties: {},
    });
  }

  public getCities(ref: string): Observable<any> {
    return this.http.post(environment.apiEndPoint, {
      apiKey: environment.apiKey,
      modelName: 'Address',
      calledMethod: 'getCities',
      methodProperties: {
        AreaRef: ref,
      },
    });
  }

  public getDepartments(ref: string): Observable<any> {
    return this.http.post(environment.apiEndPoint, {
      apiKey: environment.apiKey,
      modelName: 'AddressGeneral',
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityRef: ref,
      },
    });
  }
}
