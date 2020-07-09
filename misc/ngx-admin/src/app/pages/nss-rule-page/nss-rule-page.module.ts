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
  NbStepperModule,
} from '@nebular/theme';

import { CreateNssRuleComponent } from './create-nss-rule/create-nss-rule.component';
import { SearchNssRuleComponent } from './search-nss-rule/search-nss-rule.component';
import { TableNssRuleComponent } from './table-nss-rule/table-nss-rule.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { NSSRulePageComponent } from './nss-rule-page.component';
import { DetailNssRuleComponent } from './detail-nss-rule/detail-nss-rule.component';

@NgModule({
  declarations: [
    CreateNssRuleComponent,
    SearchNssRuleComponent,
    TableNssRuleComponent,
    NSSRulePageComponent,
    DetailNssRuleComponent,
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
    NbStepperModule,
    NbProgressBarModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NbTreeGridModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ CreateNssRuleComponent, DetailNssRuleComponent ],
})
export class NssRulePageModule { }
