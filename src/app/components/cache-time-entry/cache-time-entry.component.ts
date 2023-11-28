import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CacheService } from 'app/services/cache.service';

@Component({
  selector: 'app-cache-time-entry',
  templateUrl: './cache-time-entry.component.html',
  styleUrls: ['./cache-time-entry.component.css']
})
export class CacheTimeEntryComponent implements OnInit {

  model: { cacheTime: number };
  constructor(private cacheService: CacheService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    // Get the cache default value
    this.model = { cacheTime: this.cacheService.getCacheTime() };
  }

  /**
   * Save function:
   * - Edit the cache time;
   * - Clear the local storage, remove the application data cached;
   * - Close the modal;
   */
  save(): void {
    if (this.model?.cacheTime) {
      this.cacheService.setCacheTime(this.model.cacheTime);
      this.cacheService.cleanLocalStorage(); 
      this.close();
    }
  }

  /**
   * Close the modal
   */
  close(): void {
    this.activeModal.close();
  }
}
