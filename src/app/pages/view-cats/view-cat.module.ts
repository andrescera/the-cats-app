import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewCatPage } from './view-cat.page';

import { IonicModule } from '@ionic/angular';

import { ViewCatPageRoutingModule } from './view-cat-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCatPageRoutingModule
  ],
  declarations: [ViewCatPage]
})
export class ViewCatPageModule {}
