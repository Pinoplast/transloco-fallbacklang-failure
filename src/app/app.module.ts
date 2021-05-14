import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TRANSLOCO_CONFIG, TranslocoConfig, TranslocoModule } from '@ngneat/transloco';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { OnPushComponent } from './on-push/on-push.component';
import { httpLoader } from './loaders/http.loader';
import { environment } from '../environments/environment';
import { TranslocoMessageFormatModule } from '@ngneat/transloco-messageformat';

@NgModule({
  declarations: [AppComponent, HomeComponent, OnPushComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslocoModule,
    TranslocoMessageFormatModule.init(),
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
        defaultLang: 'en',
        missingHandler: {
          useFallbackTranslation: true
        },
        scopeMapping: {
          'todos-page': 'todos',
          'transpilers/messageformat': 'mf'
        }
      } as TranslocoConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}