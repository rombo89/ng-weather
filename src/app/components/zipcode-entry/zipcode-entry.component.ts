import { Component } from '@angular/core';
import { LocationService } from "../../services/location.service";

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {

  model = { zipcode: '' }; // Zipcode model input 
  constructor(private service: LocationService) { }

  addLocation(): void {
    if (this.model.zipcode) {
      this.service.addLocation(this.model.zipcode);
    }
  }

}
