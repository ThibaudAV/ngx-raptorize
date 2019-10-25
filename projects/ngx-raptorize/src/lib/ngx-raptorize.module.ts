import { NgModule } from '@angular/core';
import { NgxRaptorizeComponent } from './ngx-raptorize.component';
import { KonamiCodeDirective } from './konamiCode.directive';

@NgModule({
  declarations: [NgxRaptorizeComponent, KonamiCodeDirective],
  exports: [NgxRaptorizeComponent, KonamiCodeDirective],
})
export class NgxRaptorizeModule {}
