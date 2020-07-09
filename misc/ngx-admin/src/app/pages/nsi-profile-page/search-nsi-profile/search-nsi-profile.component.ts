import { Component, OnInit, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CreateNsiProfileComponent } from '../create-nsi-profile/create-nsi-profile.component';
import { TableNsiProfileComponent } from '../table-nsi-profile/table-nsi-profile.component';

@Component({
  selector: 'ngx-search-nsi-profile',
  templateUrl: './search-nsi-profile.component.html',
  styleUrls: ['./search-nsi-profile.component.scss'],
})
export class SearchNsiProfileComponent implements OnInit {

  @Input() table: TableNsiProfileComponent;
  public nsiProfileName: string = '';

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
  }

  openDialog() {
    const dialog = this.dialogService.open(CreateNsiProfileComponent)
            .onClose.subscribe(nsiProfile => {
                if (nsiProfile !== null && nsiProfile !== undefined) {
                    this.table.post(nsiProfile);
                  }
            });
  }

  search() {
    if (this.nsiProfileName !== '') {
      this.table.get(this.nsiProfileName);
    } else {
      this.table.getAll();
    }
  }

}
