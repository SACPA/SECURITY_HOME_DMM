import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {SecondWithTabsPageRoutingModule } from './second-with-tabs-routing.module';

import { SecondWithTabsPage } from './second-with-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondWithTabsPageRoutingModule
  ],
  declarations: [SecondWithTabsPage]
})
export class SecondWithTabsPageModule

{}
