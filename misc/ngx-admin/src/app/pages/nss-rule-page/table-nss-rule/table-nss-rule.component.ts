import { Component } from '@angular/core';
import { NSSRuleTableData } from '../../../@core/data/nss-rule-table-data';
import { NSSRule } from '../../../@core/model/nssrule';
import { NbGlobalPhysicalPosition,
         NbToastrService,
         NbComponentStatus,
         NbDialogService,
         NbDialogRef } from '@nebular/theme';
import { CreateNssRuleComponent } from '../create-nss-rule/create-nss-rule.component';
import { DetailNssRuleComponent } from '../detail-nss-rule/detail-nss-rule.component';

@Component({
  selector: 'ngx-table-nss-rule',
  templateUrl: './table-nss-rule.component.html',
  styleUrls: ['./table-nss-rule.component.scss'],
})
export class TableNssRuleComponent {
  nssRules: NSSRule[] = [];

  constructor(private service: NSSRuleTableData<NSSRule>,
              private toastrService: NbToastrService,
              private dialogService: NbDialogService) {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(data => {
      if (data !== null && data !== undefined && data !== []) {
        this.nssRules = data;
      }else {
        this.nssRules = [];
      }
    });
  }

  get(name: string) {
    this.service.getData(name).subscribe(data => {
      this.nssRules = [];
      if (data !== null && data !== undefined && data.name !== null) {
        this.nssRules.push(data);
      }
    });
  }
  deleteNssRule(nssRule: NSSRule) {
    if (window.confirm('Are you sure you want to delete ' + nssRule.name + '?')) {
     this.service.delete(nssRule.name).subscribe(() => {
        this.showToast('Success!', 'NSS Rule is deleted.');
        this.getAll();
     });
    }
  }
  post(nssRule: NSSRule) {
    this.service.post(nssRule).subscribe(() => {
      this.showToast('Success!', 'NSS Rule is deleted.');
      this.getAll();
   });
  }
  show(nssRule: NSSRule) {
    const dialogRef: NbDialogRef<DetailNssRuleComponent> = this.dialogService.open(DetailNssRuleComponent);
    dialogRef.componentRef.instance.nssRule = nssRule;
  }
  private showToast(title: string, body: string) {
    const s: NbComponentStatus = 'success';
    const config = {
      status: s,
      destroyByClick: true,
      duration: 2000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: false,
    };
    this.toastrService.show(body, title, config);
  }

  onDeleteConfirm(event: any): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
