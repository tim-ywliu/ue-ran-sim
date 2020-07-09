import { Component } from '@angular/core';
import { NSIProfileTableData } from '../../../@core/data/nsi-profile-table-data';
import { NbGlobalPhysicalPosition,
         NbToastrService,
         NbComponentStatus,
         NbDialogService,
         NbDialogRef } from '@nebular/theme';
import { CreateNsiProfileComponent } from '../create-nsi-profile/create-nsi-profile.component';
import { NSIProfile } from '../../../@core/model/nsiprofile';


@Component({
  selector: 'ngx-table-nsi-profile',
  templateUrl: './table-nsi-profile.component.html',
  styleUrls: ['./table-nsi-profile.component.scss'],
})
export class TableNsiProfileComponent {
  nsiProfiles: NSIProfile[] = [];

  constructor(private service: NSIProfileTableData<NSIProfile>,
              private toastrService: NbToastrService,
              private dialogService: NbDialogService) {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(data => {
      if (data !== null && data !== undefined && data !== []) {
        this.nsiProfiles = data;
      }else {
        this.nsiProfiles = [];
      }
    });
  }

  get(name: string) {
    this.service.getData(name).subscribe(data => {
      this.nsiProfiles = [];
      if (data !== null && data !== undefined && data.name !== null) {
        this.nsiProfiles.push(data);
      }
    });
  }
  deleteNssRule(nsiProfile: NSIProfile) {
    if (window.confirm('Are you sure you want to delete ' + nsiProfile.name + '?')) {
     this.service.delete(nsiProfile.name).subscribe(() => {
        this.showToast('Success!', 'NSI Profile deleted.');
        this.getAll();
     });
    }
  }
  post(nsiProfile: NSIProfile) {
    this.service.post(nsiProfile).subscribe(() => {
      this.showToast('Success!', 'NSI Profile added.');
      this.getAll();
   });
  }
  show(nsiProfile: NSIProfile) {
    const dialogRef: NbDialogRef<CreateNsiProfileComponent> = this.dialogService.open(CreateNsiProfileComponent);
    dialogRef.componentRef.instance.nsiProfile = nsiProfile;
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
