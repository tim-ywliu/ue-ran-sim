import {Component, OnInit, Input, Inject, ViewContainerRef, ViewChild} from '@angular/core';
import {UiSwitchComponent} from 'ngx-ui-switch';
import {WebSocketService} from './WebSocketService';

class Command {
  public name = '';
  public count = '';


  constructor(name: string, count: string ) {
    this.name = name;
    this.count = count;
  }
}

class FlowType {
  public type = '';
  public nodeId;
  public generateCommand: Command;

  constructor(type: string, nodeId, count: Command) {
    this.type = type;
    this.nodeId = nodeId;
    this.generateCommand = count;
  }
}

@Component({
  selector: 'ngx-network-device',
  templateUrl: './network-device.component.html',
  styleUrls: ['./network-device.component.scss'],
})
export class NetworkDeviceComponent implements OnInit {
  private ndImages = 'Features';
  public on_off: boolean = true;
  @Input() image: string = '';
  imageUrl = '';
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
  filteredList: string[] = [];
  width: number;
  height: number;
  web: WebSocketService;
  constructor() {
    this.web = new WebSocketService();
  }
  ngOnInit() {
    if (this.image === '') {
      this.image = this.ndImages;
    }
    this.imageUrl = `assets/images/mobile.png`;
    this.filteredList = this.list;
  }
  private flow: FlowType;

  getAll() {
    this.web.webSocketSubject.subscribe( data => {
      if (data['type'] === 'possibleEvents')
        this.features = data['message'];
    } );
    return this.features;
  }

  createResource() {
    this.flow = new FlowType('UE', this.selectedIndex, new Command(this.features[this.selectedIndex], '3'));
    this.web.webSocketSubject.next(JSON.stringify(this.flow));
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
