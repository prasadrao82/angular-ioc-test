import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartappsComponent } from './smartapps.component';
import { AirqComponent } from './airq/airq.component';

const routes: Routes = [{
  path: '',
  component: SmartappsComponent,
  children: [{
    path: 'airq',
    component: AirqComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class SmartappsRoutingModule { }

export const routedComponents = [
  SmartappsComponent,
  AirqComponent,
];
