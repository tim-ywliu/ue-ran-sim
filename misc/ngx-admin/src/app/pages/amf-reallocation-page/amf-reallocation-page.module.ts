import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgTerminalModule } from 'ng-terminal';
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

import { AmfReallocationPageComponent } from './amf-reallocation-page.component';
import { NetworkDeviceComponent } from './network-device/network-device.component';
import { ArrowComponent } from './arrow/arrow.component';
import { NetworkFunctionComponent } from './network-function/network-function.component';
import { NetworkContainerComponent } from './network-container/network-container.component';
import { AMFReallocationPageService } from './amf-reallocation-page.service';
import { UiSwitchModule } from 'ngx-ui-switch';
import {CKEditorModule} from 'ng2-ckeditor';
import {BaseStationComponent} from './network-device/base-station.component';
import {TerminalDeviceComponent} from './network-device/terminal-device.component';
@NgModule({
  declarations: [
    AmfReallocationPageComponent,
    NetworkDeviceComponent,
    ArrowComponent,
    NetworkFunctionComponent,
    NetworkContainerComponent,
    BaseStationComponent,
    TerminalDeviceComponent,
  ],
  imports: [
    UiSwitchModule,
    CommonModule,
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
    NgTerminalModule,
    CKEditorModule,
  ],
  providers: [AMFReallocationPageService],
  entryComponents: [
    NetworkDeviceComponent,
    ArrowComponent,
    NetworkFunctionComponent,
  ],
})
export class AmfReallocationPageModule { }
