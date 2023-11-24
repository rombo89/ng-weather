import { Injectable, Signal, effect, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CurrentConditions } from '../interfaces/current-conditions.type';
import { ConditionsAndZip } from '../interfaces/conditions-and-zip.type';
import { Forecast } from '../interfaces/forecast.type';
import { LocationService } from './location.service';
import { CacheService } from './cache.service';
import { LocationAction } from '../interfaces/location-state.type';

@Injectable()
export class WeatherService {

  static URL = 'http://api.openweathermap.org/data/2.5';
  static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';

  private currentConditions = signal<ConditionsAndZip[]>([]);

  constructor(
    private http: HttpClient,
    private locationService: LocationService,
    private cacheService: CacheService) {
    effect(() => {
      const state = this.locationService.locationState();
      switch (state.action) {
        case LocationAction.ADD:
          this.addCurrentConditions(state.zipcodeAdded);
          break;
        case LocationAction.REMOVE:
          this.removeCurrentConditions(state.zipcodeIndexRemoved);
          break;
        default:
          for (let l of state.locations) {
            this.addCurrentConditions(l);
          }
      }
    }, { allowSignalWrites: true });
  }

  private addCurrentConditions(zipcode: string): void {
    if (zipcode) {
      const url = `${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`;
      const data = this.cacheService.get(url);
      // Use the data from cache if exists and the time is not expired
      if (data !== null) {
        this.currentConditions.mutate(conditions => conditions.push({ zip: zipcode, data }));
      } else {
        // Request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
        this.http.get<CurrentConditions>(url)
          .pipe(
            switchMap(response => {
              // Cache data
              this.cacheService.put({
                key: url,
                data: response,
              });
              return of<CurrentConditions>(response);
            })
          )
          .subscribe(data => this.currentConditions.mutate(conditions => conditions.push({ zip: zipcode, data })));
      }

    }
  }

  private removeCurrentConditions(index: number): void {
    this.currentConditions.mutate(conditions => {
      conditions.splice(index, 1);
    });
  }

  getCurrentConditions(): Signal<ConditionsAndZip[]> {
    return this.currentConditions.asReadonly();
  }

  getForecast(zipcode: string): Observable<Forecast> {
    const url = `${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`;
    const data = this.cacheService.get(url);
    // Return data from cache if exists and the cache time is not expired
    if (data !== null) {
      return of<Forecast>(data)
    }
    // Request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get<Forecast>(url)
      .pipe(
        switchMap(response => {
          // Cache data
          this.cacheService.put({
            key: url,
            data: response,
          });
          return of<Forecast>(response);
        })
      );
  }

  getWeatherIcon(id: number): string {
    if (id >= 200 && id <= 232)
      return WeatherService.ICON_URL + "art_storm.png";
    else if (id >= 501 && id <= 511)
      return WeatherService.ICON_URL + "art_rain.png";
    else if (id === 500 || (id >= 520 && id <= 531))
      return WeatherService.ICON_URL + "art_light_rain.png";
    else if (id >= 600 && id <= 622)
      return WeatherService.ICON_URL + "art_snow.png";
    else if (id >= 801 && id <= 804)
      return WeatherService.ICON_URL + "art_clouds.png";
    else if (id === 741 || id === 761)
      return WeatherService.ICON_URL + "art_fog.png";
    else
      return WeatherService.ICON_URL + "art_clear.png";
  }

}


