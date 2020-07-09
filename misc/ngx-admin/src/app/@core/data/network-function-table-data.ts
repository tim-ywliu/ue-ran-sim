import { Observable } from 'rxjs';
import { NFProfile } from '../model/nfprofile';

export abstract class NetworkFunctionTableData {
  abstract getNFProfile(nfInstanceId: string): Observable<NFProfile>;
  abstract getUriList(): Observable<any>;
  abstract postNEF(data: any): Observable<any>;
  abstract postAMF(data: any): Observable<any>;
}
