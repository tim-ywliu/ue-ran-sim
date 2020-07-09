import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NetworkFunctionTableData } from '../data/network-function-table-data';
import { NFProfile } from '../model/nfprofile';

@Injectable()
export class NetworkFunctionTableService extends NetworkFunctionTableData {

  constructor(private http: HttpClient) {
    super();
  }

  configUrl = 'http://localhost:7000/features';


  getUriList(): Observable<any> {
    return this.http.get<any[]>(this.configUrl);
  }
  postNEF(data: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8088/naf-eventexposure/v1/subscriptions', data);
  }
  postAMF(data: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8086/seaf-ue-authentications/0', data);

  }

  getNFProfile(nfInstanceId: string): Observable<NFProfile> {
    return undefined;
  }

}
