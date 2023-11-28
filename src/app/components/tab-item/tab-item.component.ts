import {
  Component,
  Input,
} from "@angular/core";

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.css']
})
export class TabItemComponent {

  @Input() title: string;

  protected _tabActive = false;
  @Input() set isActive(isActive: boolean) {
    setTimeout(() => {
      this._tabActive = isActive;
    }, 0);
  }

  get isActive(): boolean {
    return this._tabActive;
  }

}
