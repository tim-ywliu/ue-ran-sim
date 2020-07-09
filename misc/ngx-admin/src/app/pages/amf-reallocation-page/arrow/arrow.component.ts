import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss'],
})
export class ArrowComponent implements OnInit {
  imageUrl = '';
  @Input() type = '';
  constructor() { }

  ngOnInit() {
    if (this.type === '') {
      this.type = 'arrow-two-way';
    }
    this.imageUrl = `assets/images/arrow-${this.type}.png`;
  }

}
