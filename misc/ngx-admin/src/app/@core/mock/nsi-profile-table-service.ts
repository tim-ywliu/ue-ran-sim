import { Injectable } from '@angular/core';
import { NSIProfileTableData } from '../data/nsi-profile-table-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NSIProfile } from '../model/nsiprofile';

@Injectable()
export class NSIProfileTableService extends NSIProfileTableData<NSIProfile> {

  constructor(private http: HttpClient) {
    super();
  }

  configUrl = 'http://10.154.2.27:8081/nnssf-configuration/v1/nsiprofiles';

  getData(nsiProfileName: string): Observable<NSIProfile> {
      return this.http.get<NSIProfile>(this.configUrl + '/' + nsiProfileName);
  }

  getAll(): Observable<NSIProfile[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers: headers };
    return this.http.get<NSIProfile[]>(this.configUrl, options);
  }

  delete(nsiProfileName: string): Observable<any> {
    return this.http.delete(this.configUrl + '/' + nsiProfileName);
  }

  post(nsiProfile: NSIProfile): Observable<any> {
    const json = JSON.stringify(nsiProfile);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers: headers };
    return this.http.post(this.configUrl, `[${json}]`, options);
  }
}
