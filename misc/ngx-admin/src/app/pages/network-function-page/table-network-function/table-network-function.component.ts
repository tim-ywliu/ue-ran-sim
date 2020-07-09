import { Component } from '@angular/core';
import { NFProfile } from '../../../@core/model/nfprofile';
import { NetworkFunctionTableData } from '../../../@core/data/network-function-table-data';
import { NFStatus } from '../../../@core/model/nfstatus';
import { NFType } from '../../../@core/model/nftype';

@Component({
  selector: 'ngx-table-network-function',
  templateUrl: './table-network-function.component.html',
  styleUrls: ['./table-network-function.component.scss'],
})
export class TableNetworkFunctionComponent {

  nfProfiles: NFProfile[] = [];
  constructor(private service: NetworkFunctionTableData) {
  }
}
