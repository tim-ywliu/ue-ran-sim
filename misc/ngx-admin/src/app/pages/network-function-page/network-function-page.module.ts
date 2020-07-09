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

import { NetworkFunctionPageComponent } from './network-function-page.component';
import { TableNetworkFunctionComponent } from './table-network-function/table-network-function.component';

@NgModule({
  declarations: [
    NetworkFunctionPageComponent,
    TableNetworkFunctionComponent],
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
})
export class NetworkFunctionPageModule { }
