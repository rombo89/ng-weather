import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ZipcodeEntryComponent } from './components/zipcode-entry/zipcode-entry.component';
import { LocationService } from "./services/location.service";
import { ForecastsListComponent } from './components/forecasts-list/forecasts-list.component';
import { WeatherService } from "./services/weather.service";
import { CurrentConditionsComponent } from './components/current-conditions/current-conditions.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RouterModule } from "@angular/router";
import { routing } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TabItemComponent } from './components/tab-item/tab-item.component';
import { TabGroupComponent } from './components/tab-group/tab-group.component';
import { CommonModule } from '@angular/common';
import { CacheService } from './services/cache.service';
import { CurrentConditionsDataComponent } from './components/current-conditions-data/current-conditions-data.component';

export const CACHE_TIME_MINUTES = new InjectionToken<number>('cacheTime');

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    routing,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent,
    ZipcodeEntryComponent,
    ForecastsListComponent,
    CurrentConditionsComponent,
    MainPageComponent,
    TabItemComponent,
    TabGroupComponent,
    CurrentConditionsDataComponent
  ],
  providers: [
    { provide: CACHE_TIME_MINUTES, useValue: 30 },
    CacheService,
    LocationService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
