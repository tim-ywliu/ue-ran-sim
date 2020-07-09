import {Component, OnInit} from '@angular/core';
import {IWebSocketListener, WebSocketService} from './WebSocketService';

@Component({
  selector: 'ngx-base-terminal-device',
  templateUrl: './terminal-device.component.html',
  styleUrls: ['./network-device.component.scss'],
})

export class TerminalDeviceComponent implements OnInit, IWebSocketListener {
  private strings: string[];
  web: WebSocketService;
  private myArray: Array<{ color: string, text: string }> = [];

  constructor() {
    this.web = new WebSocketService();
    this.strings = [];
  }

  getColour(data: string): string {

    const colorArray = [{color: 'RED', text: '\\033[0;31m'}, {
      color: 'BLACK',
      text: '\\033[0;30m',
    }, {
      color: 'GREEN',
      text: '\\033[0;32m',
    }, {
      color: 'YELLOW',
      text: '\\033[0;33m',
    }, {
      color: 'BLUE',
      text: '\\033[0;34m',
    }, {
      color: 'PURPLE',
      text: '\\033[0;35m',
    }, {
      color: 'CYAN',
      text: '\\033[0;36m',
    }, {
      color: 'WHITE',
      text: '\\033[0;37m',
    }];

    const id = colorArray.map(e => e.text).indexOf(data);
    if (id !== -1)
      return colorArray[id].color;
    else return 'BLACK';
  }

  ngOnInit(): void {
    this.web.setCallBack(this);
    this.web.ngOnInit();
  }

  onMessage(data) {
    const colorCode = data.substring(0, 10);
    const colour =  this.getColour(colorCode);
    data.replace(colorCode, '');
    this.myArray.push({color: colour, text: data});
  }
}




