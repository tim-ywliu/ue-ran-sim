import { Injectable } from '@angular/core';
import { NSSRuleTableData } from '../data/nss-rule-table-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NSSRule } from '../model/nssrule';

@Injectable()
export class NSSRuleTableService extends NSSRuleTableData<NSSRule> {

  constructor(private http: HttpClient) {
    super();
  }

  configUrl = 'http://10.154.2.27:8081/nnssf-configuration/v1/nssrules';

  getData(nssRuleName: string): Observable<NSSRule> {
      return this.http.get<NSSRule>(this.configUrl + '/' + nssRuleName);
  }

  getAll(): Observable<NSSRule[]> {
    return this.http.get<NSSRule[]>(this.configUrl);
  }

  delete(nssRuleName: string): Observable<any> {
    return this.http.delete(this.configUrl + '/' + nssRuleName);
  }

  post(nssRule: NSSRule): Observable<any> {
    const json = JSON.stringify(nssRule);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers: headers };
    return this.http.post(this.configUrl, `[${json}]`, options);
  }
}
