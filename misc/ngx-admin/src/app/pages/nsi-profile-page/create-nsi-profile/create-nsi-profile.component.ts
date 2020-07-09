import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { NSIProfile } from '../../../@core/model/nsiprofile';
import { TargetAmfSet } from '../../../@core/model/targetamfset';

@Component({
  selector: 'ngx-create-nsi-profile',
  templateUrl: './create-nsi-profile.component.html',
  styleUrls: ['./create-nsi-profile.component.scss'],
})
export class CreateNsiProfileComponent implements OnInit {

  nsiProfile: NSIProfile = new NSIProfile();
  targetAmfSet: TargetAmfSet = new TargetAmfSet();
  editMode = false;

  constructor(protected ref: NbDialogRef<CreateNsiProfileComponent>,
    private toastrService: NbToastrService) { }

  ngOnInit() {
    this.editMode = this.nsiProfile.name === '';
  }

  create() {
    let errorMessage: string = '';
    if (this.nsiProfile.targetAmfSet.length === 0) {
      errorMessage = 'Target AMF Set is required.';
      this.showToast('Warning!', errorMessage);
    }

    if (this.nsiProfile.nrfUri === '') {
      errorMessage = 'NRF Uri is required.';
      this.showToast('Warning!', errorMessage);
    }

    if (this.nsiProfile.name === '') {
      errorMessage = 'Name is required.';
      this.showToast('Warning!', errorMessage);
    }

    if (errorMessage === '') {
      this.ref.close(this.nsiProfile);
    }
  }

  addTargetAmfSet() {
    if (this.targetAmfSet.regionId === ''
      || this.targetAmfSet.setId === '') {
      return false;
    }

    const index = this.nsiProfile.targetAmfSet
      .findIndex(x => x.setId === this.targetAmfSet.setId && x.regionId === this.targetAmfSet.regionId);
    if (index !== -1) {
      return false;
    }

    this.nsiProfile.targetAmfSet.push(this.targetAmfSet);
    this.targetAmfSet = new TargetAmfSet();
  }

  deleteTargetAmfSet(targetAmfSetItem: TargetAmfSet) {
    const index = this.nsiProfile.targetAmfSet
      .findIndex(x => x.setId === targetAmfSetItem.setId && x.regionId === targetAmfSetItem.regionId);

    if (index !== -1) {
      this.nsiProfile.targetAmfSet.splice(index, 1);
    }
  }

  private showToast(title: string, body: string) {
    const s: NbComponentStatus = 'warning';
    const config = {
      status: s,
      destroyByClick: true,
      duration: 2000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: false,
      cssClass: 'test-toast',
    };
    this.toastrService.show(body, title, config);
  }

}
