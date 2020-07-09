import {webSocket} from 'rxjs/webSocket';
import {OnInit} from '@angular/core';

export interface IWebSocketListener {
  onMessage(data);
}

export class WebSocketService implements OnInit {
  webSocketSubject = webSocket('ws://localhost:7070/demo');
  socketListener: IWebSocketListener = null;
  features: any = [];

  setCallBack(socket: IWebSocketListener): void {
    this.socketListener = socket;
  }

  ngOnInit(): void {
    const w = this.webSocketSubject;
    this.webSocketSubject.subscribe(data => {
      if (this.socketListener != null) {
        if (data['type'] === 'log')
          this.socketListener.onMessage(data['message']);
        if (data['type'] === 'possibleEvents')
          this.features = data['message'];
      }
    });
    setInterval(function () {
      w.next('"dummy"');
    }, 1000);
  }
}
