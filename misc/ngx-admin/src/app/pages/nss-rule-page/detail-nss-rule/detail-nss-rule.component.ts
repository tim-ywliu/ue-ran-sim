import { Component, OnInit } from '@angular/core';
import { NSSRule } from '../../../@core/model/nssrule';
import { NbDialogRef } from '@nebular/theme';
import { CreateNssRuleComponent } from '../create-nss-rule/create-nss-rule.component';

@Component({
  selector: 'ngx-detail-nss-rule',
  templateUrl: './detail-nss-rule.component.html',
  styleUrls: ['./detail-nss-rule.component.scss'],
})
export class DetailNssRuleComponent implements OnInit {
  nssRule: NSSRule = new NSSRule();
  editMode = false;
  constructor(protected ref: NbDialogRef<CreateNssRuleComponent>) { }

  ngOnInit() {
    this.editMode = this.nssRule.name === '';

  }

}
