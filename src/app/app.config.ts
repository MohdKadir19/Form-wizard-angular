import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app.routes';
import { Topbar } from './layout/topbar/topbar';
import { Sidebar } from './layout/sidebar/sidebar';
import { MainLayout } from './layout/main-layout/main-layout';

export const appConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(/* any other providers like BrowserAnimationsModule */)
  ]
};
