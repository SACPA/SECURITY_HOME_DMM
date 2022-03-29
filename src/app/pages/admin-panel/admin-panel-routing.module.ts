import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPanelPage } from './admin-panel';

const routes: Routes = [
  {
    path: 'tabs',
    component: AdminPanelPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then( m => m.Tab1PageModule)
      },
      {
        path: 'tab1/details',
        loadChildren: () => import('../details/details.module').then( m => m.DetailsPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then( m => m.Tab2PageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPanelPageRoutingModule {}