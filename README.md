# ngx-raptorize

![Travis (.org)](https://img.shields.io/travis/ThibaudAv/ngx-raptorize)
![npm](https://img.shields.io/npm/v/ngx-raptorize)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Angular2+ representation of the Raptorize plugin like :

- http://zurb.com/playground/jquery-raptorize
- https://github.com/WyattNielsen/ngRaptorize

The goal is a small old scool easter eggs 🥚. And for me to make a small public angular lib 😉

Demo : https://thibaudav.github.io/ngx-raptorize/

## 📦 Install

`yarn add ngx-raptorize`

No dependencies (besides Angular2+) are required.

## Use

Add `<ngx-raptorize></ngx-raptorize>` in your main app component or elsewhere.
Import module

```
import { NgxRaptorizeModule } from 'ngx-raptorize';

...

@NgModule({
  imports: [
    ...
    NgxRaptorizeModule,
    ...
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule {}
```

## Development server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
