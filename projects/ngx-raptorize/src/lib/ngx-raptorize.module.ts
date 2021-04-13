import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxRaptorizeComponent } from './ngx-raptorize.component';
import { KonamiCodeDirective } from './konamiCode.directive';
import {
  NGX_RAPTORIZE_CONFIG,
  NgxRaptorizeConfig,
} from './ngx-raptorize.token';

@NgModule({
  declarations: [NgxRaptorizeComponent, KonamiCodeDirective],
  exports: [NgxRaptorizeComponent, KonamiCodeDirective],
  providers: [],
})
export class NgxRaptorizeModule {
  static withAssets(
    raptorizeConfig: NgxRaptorizeConfig,
  ): ModuleWithProviders<NgxRaptorizeModule> {
    return {
      ngModule: NgxRaptorizeModule,
      providers: [
        {
          provide: NGX_RAPTORIZE_CONFIG,
          useValue: raptorizeConfig,
        },
      ],
    };
  }
}
