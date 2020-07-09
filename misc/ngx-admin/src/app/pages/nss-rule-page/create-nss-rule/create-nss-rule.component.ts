import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { NSSRule } from '../../../@core/model/nssrule';
import { NSIProfileTableData } from '../../../@core/data/nsi-profile-table-data';
import { NSIProfile } from '../../../@core/model/nsiprofile';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppropriateNsiProfile } from '../../../@core/model/appropriatensiprofile';

@Component({
  selector: 'ngx-create-nss-rule',
  templateUrl: './create-nss-rule.component.html',
  styleUrls: ['./create-nss-rule.component.scss'],
})
export class CreateNssRuleComponent implements OnInit {

  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;

  nssRule: NSSRule = new NSSRule();
  editMode = false;
  nsiProfileList: NSIProfile[] = [];
  nsiProfileListBackup: NSIProfile[] = [];
  constructor(private fb: FormBuilder,
    protected ref: NbDialogRef<CreateNssRuleComponent>,
    private service: NSIProfileTableData<NSIProfile>,
    private toastrService: NbToastrService) { }

  ngOnInit() {
    this.editMode = this.nssRule.name === '';
    if (this.editMode === true) {
      this.service.getAll().subscribe(nsiProfileList => {
        this.nsiProfileList = nsiProfileList;
      });
    }

    this.firstForm = this.fb.group({
      name: ['', Validators.required],
      salience: '',
    });

    this.secondForm = this.fb.group({
      mcc: ['286', Validators.required],
      mnc: ['04', Validators.required],
      tac: ['', Validators.required],
      sst: ['', Validators.required],
      sd: '',
    });

    this.thirdForm = this.fb.group({
      grant: ['ALLOWED', Validators.required],
      accessType: ['3GPP_ACCESS', Validators.required],
      selectedNsiProfile: '',
      selectedNsiProfileSalience: '',
    });

  }

  create() {
    let ok: number = 0;
    if (this.firstForm.dirty && this.firstForm.valid) {
      this.nssRule.name = this.firstForm.value.name;
      this.nssRule.salience = this.firstForm.value.salience;
      ok |= 0x0001;
    }
    if (this.secondForm.dirty && this.secondForm.valid) {
      this.nssRule.tai.plmnId.mcc = this.secondForm.value.mcc;
      this.nssRule.tai.plmnId.mnc = this.secondForm.value.mnc;
      this.nssRule.tai.tac = this.secondForm.value.tac;
      this.nssRule.snssai.sd = this.secondForm.value.sd;
      this.nssRule.snssai.sst = this.secondForm.value.sst;
      ok |= 0x0010;
    }
    if (this.thirdForm.dirty && this.thirdForm.valid) {
      this.nssRule.behavior.accessType = this.thirdForm.value.accessType;
      this.nssRule.behavior.grant = this.thirdForm.value.grant;
      ok |= 0x0100;
    }

    if (this.secondForm.value.sst === '') {
      this.showToast('Warning!', 'SST is required.');
      return false;
    }

    if (ok === 0x0111) {
      this.ref.close(this.nssRule);
    } else {
      return false;
    }

  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
    if (this.firstForm.value.name === '') {
      this.showToast('Warning!', 'Name is required.');
    }
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
    if (this.secondForm.value.mcc === '') {
      this.showToast('Warning!', 'MCC is required.');
    }
    if (this.secondForm.value.mnc === '') {
      this.showToast('Warning!', 'MNC is required.');
    }
    if (this.secondForm.value.tac === '') {
      this.showToast('Warning!', 'TAC is required.');
    }
    if (this.secondForm.value.sst === '') {
      this.showToast('Warning!', 'SST is required.');
    }
  }


  onThirdSubmit() {
    this.thirdForm.markAsDirty();
    if (this.thirdForm.value.accessType === '') {
      this.showToast('Warning!', 'Access Type is required.');
    }
    if (this.thirdForm.value.grant === '') {
      this.showToast('Warning!', 'Grant is required.');
    }
  }

  selected() {
  }

  addNsiProfile() {
    if (this.thirdForm.value.selectedNsiProfile === ''
      || this.thirdForm.value.selectedNsiProfileSalience === '') {
      return false;
    }
    this.nssRule.behavior.nsiProfileList
      .push(new AppropriateNsiProfile(this.thirdForm.value.selectedNsiProfile,
        this.thirdForm.value.selectedNsiProfileSalience));
    for (let i = 0; i < this.nsiProfileList.length; i++) {
      if (this.nsiProfileList[i].name === this.thirdForm.value.selectedNsiProfile) {
        this.nsiProfileListBackup.push(this.nsiProfileList.splice(i, 1).pop());
      }
    }

    const a = this.thirdForm.value.accessType;
    const g = this.thirdForm.value.grant;

    this.thirdForm.setValue({
      selectedNsiProfile: '',
      selectedNsiProfileSalience: '',
      accessType: a,
      grant: g,

    });

  }

  deleteProfile(appropriateNsiProfile: AppropriateNsiProfile) {
    const index = this.nssRule.behavior.nsiProfileList
      .findIndex(x => x.name === appropriateNsiProfile.name);

    if (index !== -1) {
      const item: AppropriateNsiProfile = this.nssRule.behavior.nsiProfileList.splice(index, 1).pop();
      const itemIndex = this.nsiProfileListBackup.findIndex(x => x.name === item.name);
      this.nsiProfileList.push(this.nsiProfileListBackup.splice(itemIndex, 1).pop());
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
    };
    this.toastrService.show(body, title, config);
  }
}
