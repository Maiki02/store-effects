import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { countReducer } from './store/reducers/count';
import { provideHttpClient } from '@angular/common/http';
import { npcsReducer } from './store/reducers/npcs';
import { npcsEffects } from './store/effects/npcs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withPreloading(PreloadAllModules)), 
    provideClientHydration(), 
    provideHttpClient(),
    provideStore({
      npcsR: npcsReducer
    }), 
    provideEffects( npcsEffects )
  ]
};


import { PreloadAllModules, withPreloading } from '@angular/router';
