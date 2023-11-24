import { Injectable, signal } from '@angular/core';
import { ILocationState, LocationAction } from './location-state.type';

export const LOCATIONS: string = "locations";

@Injectable()
export class LocationService {

  private _locations: string[] = [];
  locationState = signal<ILocationState>({ locations: [] });

  constructor() {
    const locString = localStorage.getItem(LOCATIONS);
    if (locString) {
      this._locations = JSON.parse(locString);
      this.locationState.set({ locations: this._locations }); // Set the location list
    }
  }

  addLocation(zipcode: string) {
    this._locations.push(zipcode);
    localStorage.setItem(LOCATIONS, JSON.stringify(this._locations));
    this.locationState.update(state => {
      return {
        locations: [...state.locations, zipcode],
        action: LocationAction.ADD,
        zipcodeAdded: zipcode
      }
    });
  }

  removeLocation(index: number) {
    this._locations.splice(index, 1);
    localStorage.setItem(LOCATIONS, JSON.stringify(this._locations));
    this.locationState.mutate(state => {
      state.locations.splice(index, 1);
      state.action = LocationAction.REMOVE;
      state.zipcodeIndexRemoved = index;
    }
    );
  }

}
