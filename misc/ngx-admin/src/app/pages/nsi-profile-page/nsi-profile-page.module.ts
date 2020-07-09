import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  NbActionsModule,
  NbDatepickerModule,
  NbInputModule,
  NbRadioModule,
  NbCheckboxModule,
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbWindowModule,
  NbDialogModule,
  NbPopoverModule,
  NbTooltipModule,
  NbTreeGridModule,
} from '@nebular/theme';

import { FormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { NSIProfilePageComponent } from './nsi-profile-page.component';
import { CreateNsiProfileComponent } from './create-nsi-profile/create-nsi-profile.component';
import { SearchNsiProfileComponent } from './search-nsi-profile/search-nsi-profile.component';
import { TableNsiProfileComponent } from './table-nsi-profile/table-nsi-profile.component';

@NgModule({
  declarations: [
    CreateNsiProfileComponent,
    NSIProfilePageComponent,
    SearchNsiProfileComponent,
    TableNsiProfileComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbActionsModule,
    NbDatepickerModule,
    NbInputModule,
    NbRadioModule,
    NbCheckboxModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NbPopoverModule,
    NbTooltipModule,
    NbProgressBarModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NbTreeGridModule,
    HttpClientModule,
    FormsModule,
  ],
  entryComponents: [ CreateNsiProfileComponent ],
})
export class NSIProfilePageModule { }
