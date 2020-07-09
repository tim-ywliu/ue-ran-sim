import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-shaped-button',
  templateUrl: './shaped-button.component.html',
  styleUrls: ['./shaped-button.component.scss']
})
export class ShapedButtonComponent implements OnInit {
  @Input() status: string = 'primary';
  @Input() icon: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
