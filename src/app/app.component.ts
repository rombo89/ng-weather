import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CacheTimeEntryComponent } from './components/cache-time-entry/cache-time-entry.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private modalService: NgbModal) { }

  openCacheTimeModal(): void {
    this.modalService.open(CacheTimeEntryComponent);
  }
}
