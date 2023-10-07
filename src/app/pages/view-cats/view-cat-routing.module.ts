import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCatPage } from './view-cat.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCatPageRoutingModule {}
