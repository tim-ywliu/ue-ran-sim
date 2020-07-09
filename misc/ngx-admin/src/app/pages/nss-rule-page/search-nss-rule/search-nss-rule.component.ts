import { Component, OnInit, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CreateNssRuleComponent } from '../create-nss-rule/create-nss-rule.component';
import { TableNssRuleComponent } from '../table-nss-rule/table-nss-rule.component';

@Component({
  selector: 'ngx-search-nss-rule',
  templateUrl: './search-nss-rule.component.html',
  styleUrls: ['./search-nss-rule.component.scss']
})
export class SearchNssRuleComponent implements OnInit {
  @Input() table: TableNssRuleComponent;
  public nssRuleName: string = '';

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialogService.open(CreateNssRuleComponent)
            .onClose.subscribe(nssRule => {
                if (nssRule !== null && nssRule !== undefined) {
                    this.table.post(nssRule);
                }
            });
  }

  search() {
    if (this.nssRuleName !== '') {
      this.table.get(this.nssRuleName);
    } else {
      this.table.getAll();
    }
  }
}
