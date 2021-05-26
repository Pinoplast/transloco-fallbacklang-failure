import { BrowserModule } from '@angular/platform-browser';
import { Inject, NgModule, Optional } from '@angular/core';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TRANSLOCO_CONFIG, TranslocoConfig, TranslocoModule, TRANSLOCO_TRANSPILER, TranslocoTranspiler, Translation, DefaultTranspiler } from '@ngneat/transloco';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { OnPushComponent } from './on-push/on-push.component';
import { httpLoader } from './loaders/http.loader';
import { environment } from '../environments/environment';
import { MessageformatConfig, MessageFormatTranspiler, TranslocoMessageFormatModule, TRANSLOCO_MESSAGE_FORMAT_CONFIG } from '@ngneat/transloco-messageformat';
import MessageFormat from '@messageformat/core';
import * as MessageFormatConfig from 'messageformat';
import { MFLocale } from './message-format.config';
import { IntlEscapePipe } from './escape.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, OnPushComponent, IntlEscapePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslocoModule,
    TranslocoMessageFormatModule.init(
      {
        customFormatters: { escape: v => v.replace(/([{}]+)/g, `'$1`) }
      }
    ),
    HttpClientModule,
    TranslocoLocaleModule.init({
      langToLocaleMapping: {
        en: 'en-US',
        es: 'es-ES'
      }
    })
  ],
  providers: [
    httpLoader,
    {
      provide: TRANSLOCO_CONFIG,
      useValue: {
        prodMode: environment.production,
        availableLangs: [{ id: 'en', label: 'English' }, { id: 'es', label: 'Spanish' }],
        reRenderOnLangChange: true,
        fallbackLang: 'es',
        defaultLang: 'es',
        missingHandler: {
          useFallbackTranslation: true
        },
        scopeMapping: {
          'todos-page': 'todos',
          'transpilers/messageformat': 'mf'
        },
      } as TranslocoConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

