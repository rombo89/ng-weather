import { Component, computed, inject, Signal } from '@angular/core';
import { WeatherService } from "../../services/weather.service";
import { LocationService } from "../../services/location.service";
import { ConditionsAndZip } from '../../interfaces/conditions-and-zip.type';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  private weatherService = inject(WeatherService);
  protected locationService = inject(LocationService);
  protected currentConditionsByZip: Signal<ConditionsAndZip[]> = this.weatherService.getCurrentConditions();
  protected currentConditionsPresents = computed(() => this.currentConditionsByZip().length > 0);

  /**
   * Remove Location by index
   * @param title 
   */
  removeLocation(index: number): void {
    this.locationService.removeLocation(index);
  }


}
