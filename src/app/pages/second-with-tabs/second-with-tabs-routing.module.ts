import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondWithTabsPage } from './second-with-tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: SecondWithTabsPage,
    children: [
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then( m => m.Tab3PageModule)
      },
      {
        path: 'tab3/details',
        loadChildren: () => import('../details/details.module').then( m => m.DetailsPageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then( m => m.Tab4PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then( m => m.Tab4PageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab4',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondWithTabsPageRoutingModule {}