# 🦖 ngx-raptorize

![Travis (.org)](https://img.shields.io/travis/ThibaudAv/ngx-raptorize)
![npm](https://img.shields.io/npm/v/ngx-raptorize)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

Angular2+ representation of the Raptorize plugin like :

- http://zurb.com/playground/jquery-raptorize
- https://github.com/WyattNielsen/ngRaptorize

The goal is a small old school easter eggs 🥚 🦖. And for me to make a small public angular lib 😉

Demo : https://thibaudav.github.io/ngx-raptorize/

## 📦 Install

`yarn add ngx-raptorize` or `npm install ngx-raptorize`

No dependencies (besides Angular2+) are required.
Should work on all recent browsers.

## 🏄 Use

Add `<ngx-raptorize></ngx-raptorize>` in your main app component or elsewhere.
Import module

### ➡️ With assets in src in base64

The simplest... but maybe not the most efficient

```
import {
  NgxRaptorizeModule,
  NGX_RAPTORIZE_CONFIG,
  NgxRaptorizeConfig,
} from 'ngx-raptorize';
import { assetsBase64 } from 'ngx-raptorize/assets';

...

@NgModule({
  imports: [
    ...
    NgxRaptorizeModule,
    ...
  ],
  providers: [
    {
      provide: NGX_RAPTORIZE_CONFIG,
      useValue: {
        raptorImgSrc: raptorBase64,
        raptorSoundSrc: raptorSoundMP3Base64,
      } as NgxRaptorizeConfig,
    },
  ],
  ...
})
export class AppModule {}
```

### ➡️ With custom assets url

```
import { NgxRaptorizeModule } from 'ngx-raptorize';

...

@NgModule({
  imports: [
    ...
    NgxRaptorizeModule.withAssets({
      raptorImgSrc: 'https://zurb.com/playground/uploads/upload/upload/224/raptor.png',
      raptorSoundSrc: 'https://zurb.com/playground/raptor-sound.ogg',
    }),
    ...
  ],
  ...
})
export class AppModule {}
```

### ➡️ With lib assets

Refer the assets folder of the lib in angular.json.

Like :

```
{
  ...
  "projects": {
    "ngx-raptorize-demo": {
      ...
      "architect": {
        "build": {
          ...
          "options": {
            ...
            "assets": [
              "projects/ngx-raptorize-demo/src/favicon.ico",
              "projects/ngx-raptorize-demo/src/assets",
              ...
              {
                "glob": "**/*",
                "input": "./node_modules/ngx-raptorize/assets/",
                "output": "./assets/"
              }
            ],
          }
        }
      }
    }
  }
}
```

```
import { NgxRaptorizeModule } from 'ngx-raptorize';

...

@NgModule({
  imports: [
    ...
    NgxRaptorizeModule.withAssets({
      raptorImgSrc: 'assets/raptor.png',
      raptorSoundSrc: 'assets/raptor-sound.ogg',
    }),
    ...
  ],
  ...
})
export class AppModule {}
```

## 🕵 Development server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
