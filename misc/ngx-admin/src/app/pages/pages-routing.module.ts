import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { NSSRulePageComponent } from './nss-rule-page/nss-rule-page.component';
import { NSIProfilePageComponent } from './nsi-profile-page/nsi-profile-page.component';
import { NetworkFunctionPageComponent } from './network-function-page/network-function-page.component';
import { AmfReallocationPageComponent } from './amf-reallocation-page/amf-reallocation-page.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'network',
      component: NetworkFunctionPageComponent,
    },
    {
      path: 'nsiProfile',
      component: NSIProfilePageComponent,
    },
    {
      path: 'nssRule',
      component: NSSRulePageComponent,
    },
    {
      path: 'amfReallocation',
      component: AmfReallocationPageComponent,
    },
    {
      path: '',
      redirectTo: 'network',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
