import { Component, Input, OnInit } from '@angular/core';
import { NetworkFunctionTableData } from '../../../@core/data/network-function-table-data';
import { NFProfile } from '../../../@core/model/nfprofile';
import { NFStatus } from '../../../@core/model/nfstatus';
import { NFType } from '../../../@core/model/nftype';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'ngx-network-function',
  templateUrl: './network-function.component.html',
  styleUrls: ['./network-function.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [
      state('in', style({ opacity: 1 })),
      state('final', style({ opacity: 0 })),
      transition(':enter', [style({ opacity: 0 }), animate('2s')]),
      transition('in => final', [animate('1s')]),
    ]),
  ],
})
export class NetworkFunctionComponent implements OnInit {

  @Input() nfProfiles: NFProfile[] = [];
  @Input() nfType: string = 'AMF';
  currentNFProfile: NFProfile = null;
  currentState = 'in';
  disableValue: boolean = false;
  constructor() {
  }

  ngOnInit(): void {

  }

  getColor() {
    switch (this.nfType) {
      case NFType[NFType.AMF]: return 'danger';
      case NFType[NFType.NSSF]: return 'success';
      case NFType[NFType.NRF]: return 'warning';
      case NFType[NFType.AUSF]: return 'info';
      default: return 'danger';
    }
  }


}
