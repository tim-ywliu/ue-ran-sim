import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { NssRulePageModule } from './nss-rule-page/nss-rule-page.module';
import { PagesRoutingModule } from './pages-routing.module';
import { NSIProfilePageModule } from './nsi-profile-page/nsi-profile-page.module';
import { NetworkFunctionPageModule } from './network-function-page/network-function-page.module';
import { AmfReallocationPageModule } from './amf-reallocation-page/amf-reallocation-page.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NssRulePageModule,
    NSIProfilePageModule,
    NetworkFunctionPageModule,
    AmfReallocationPageModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
