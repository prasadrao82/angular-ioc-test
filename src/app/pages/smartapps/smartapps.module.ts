import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { SmartappsRoutingModule, routedComponents } from './smartapps-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    SmartappsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class SmartappsModule { }
