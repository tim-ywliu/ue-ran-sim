import {Component, OnInit, Input, Inject, ViewContainerRef, ViewChild} from '@angular/core';
import {UiSwitchComponent} from 'ngx-ui-switch';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {WebSocketService} from './WebSocketService';
import {FlowType} from './FlowType';
import {Command} from './Command';

@Component({
  selector: 'ngx-base-station-device',
  templateUrl: './base-station.component.html',
  styleUrls: ['./network-device.component.scss'],
})

export class BaseStationComponent implements OnInit {
  public on_off: boolean = true;
  @Input() image: string = '';
  gnodebimageUrl = '';
  @ViewChild('switchButton', {read: UiSwitchComponent, static: true}) switchButton: UiSwitchComponent;
  features: any = [];
  @Input() list: string[];
  // two way binding for input text
  inputItem = '';
  // enable or disable visiblility of dropdown
  listHidden = true;
  showError = false;
  selectedIndex = -1;
  // the list to be shown after filtering
  filteredList: string[] = ['list1', 'list2'];
  width: number;
  height: number;
  webSocketService: WebSocketService;
  private flow: FlowType;

  constructor() {
    this.webSocketService = new WebSocketService();
  }

  ngOnInit() {
    this.gnodebimageUrl = `assets/images/gnodeb.jpg`;
    this.filteredList = this.list;
  }

  getAll() {
    this.webSocketService.webSocketSubject.subscribe( data => {
      if (data['type'] === 'possibleEvents')
        this.features = data['message'];
    } );
    return this.features;
  }

  createResource() {
    this.flow = new FlowType('gnodeb', this.selectedIndex, new Command(this.features[this.selectedIndex], '3'));
    this.webSocketService.webSocketSubject.next(JSON.stringify(this.flow));
  }

  selectItem(ind) {
    this.inputItem = this.features[ind];
    this.listHidden = true;
    this.selectedIndex = ind;
  }

  // navigate through the list of items
  onKeyPress(event) {
    if (!this.listHidden) {
      if (event.key === 'Escape') {
        this.selectedIndex = -1;
        this.toggleListDisplay(0);
      } else if (event.key === 'Enter') {
        this.toggleListDisplay(0);
      } else if (event.key === 'ArrowDown') {
        this.listHidden = false;
        this.selectedIndex = (this.selectedIndex + 1) % this.filteredList.length;
        if (this.filteredList.length > 0 && !this.listHidden) {
          document.getElementsByTagName('list-item')[this.selectedIndex].scrollIntoView();
        }
      } else if (event.key === 'ArrowUp') {
        this.listHidden = false;
        if (this.selectedIndex <= 0) {
          this.selectedIndex = this.filteredList.length;
        }
        this.selectedIndex = (this.selectedIndex - 1) % this.filteredList.length;
        if (this.filteredList.length > 0 && !this.listHidden) {
          document.getElementsByTagName('list-item')[this.selectedIndex].scrollIntoView();
        }
      }
    }
  }

  toggleListDisplay(sender: number) {
    if (sender === 1) {
      this.listHidden = false;
      this.getAll();
    } else {
      // helps to select item by clicking
      setTimeout(() => {
        this.selectItem(this.selectedIndex);
        this.listHidden = true;
      }, 500);
    }
  }

}
