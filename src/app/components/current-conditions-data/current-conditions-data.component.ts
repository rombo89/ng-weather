import { Component, Input } from '@angular/core';

/**
 * Current condition detail component
 * - Show the current condition data
 */

@Component({
  selector: 'app-current-conditions-data',
  templateUrl: './current-conditions-data.component.html',
  styleUrls: ['./current-conditions-data.component.css']
})
export class CurrentConditionsDataComponent {

  @Input() location: CurrentConditionsDataComponent; // conditions data

  @Input() imgSrc: string; // img src

}
