import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/** carregando o AppModule na plataforma do navegador */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  /*  é aqui que o aplicativo inicia o bootstrapping. Então, quando iniciamos
      a aplicação, temos que explicar qual plataforma queremos segmentar
  */
