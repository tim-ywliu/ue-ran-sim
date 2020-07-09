import {
  Component, ViewChild, ViewContainerRef, Inject,
  AfterViewInit, OnInit, ElementRef, ViewChildren, ChangeDetectorRef,
} from '@angular/core';
import { AMFReallocationPageService } from '../amf-reallocation-page.service';
import { NetworkFunctionComponent } from '../network-function/network-function.component';
import { NetworkFunctionTableData } from '../../../@core/data/network-function-table-data';
import { LineCanvas, LineDirection } from '../line-canvas';
import { NetworkDeviceComponent } from '../network-device/network-device.component';
import {BaseStationComponent} from '../network-device/base-station.component';
import {TerminalDeviceComponent} from '../network-device/terminal-device.component';


@Component({
  selector: 'ngx-network-container',
  templateUrl: './network-container.component.html',
  styleUrls: ['./network-container.component.scss'],
})
export class NetworkContainerComponent implements OnInit, AfterViewInit {


  consoleText: string = '';
  consoleTextList: string[] = [];
  @ViewChild('dynamic', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;
  buttonClicked: boolean = false;
  service: any;
  public size: number = 9;
  private counter: number = 0;
  lineCanvas1: LineCanvas;
  @ViewChild('terminalDevice', { read: TerminalDeviceComponent, static: true}) terminal: TerminalDeviceComponent;
  @ViewChild('baseStationDevice', { read: BaseStationComponent, static: true }) baseStationDevice: BaseStationComponent;
  @ViewChild('netDevice', { read: NetworkDeviceComponent, static: true }) netDevice: NetworkDeviceComponent;
  @ViewChild('amfChild', { read: NetworkFunctionComponent, static: true }) amfChild: NetworkFunctionComponent;
  @ViewChild('nssfChild', { read: NetworkFunctionComponent, static: true }) nssfChild: NetworkFunctionComponent;
  @ViewChild('nrfChild', { read: NetworkFunctionComponent, static: true }) nrfChild: NetworkFunctionComponent;
  @ViewChild('ausfChild', { read: NetworkFunctionComponent, static: true }) ausfChild: NetworkFunctionComponent;
  @ViewChild('scrollMe', { read: ElementRef, static: true }) myScrollContainer: ElementRef;

  scrollToBottom(): void {
    try {
      setTimeout(() => {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;

      }, 100);

    } catch (err) { }
  }
  constructor(@Inject(AMFReallocationPageService) service,
    @Inject(ViewContainerRef) viewContainerRef, private cdr: ChangeDetectorRef,
    private nfService: NetworkFunctionTableData) {
    this.service = service;
    this.viewContainerRef = viewContainerRef;
  }
  items: string[] = [];

  lastClickedIndex;
  changeActive(i) {
    this.lastClickedIndex = i;
  }

  stateIndex = 0;
  register() {
    this.buttonClicked = true;
    if (this.stateIndex === 0) {
      this.nfService.postAMF({
        'supiOrSuci': 'suci-0-001-001-0-0-0-000000001',
        'servingNetworkName': '5G:mnc001.mcc001.3gppnetwork.org',
      })
        .subscribe(() => {

        }, () => {

        });
      this.canvasClick();
    }
    this.stateIndex++;
    if (this.stateIndex > 8) {
      this.buttonClicked = true;
    }
    this.scrollToBottom();
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {}
  canvasClick() {
    this.consoleText += '1- Registration request to initial AMF.<br/> <br/>'.fontsize(5);
    this.consoleTextList.push('1- Registration request to initial AMF.');
    this.lineCanvas1.Start();
  }
}
