import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { TabItemComponent } from 'app/tab-item/tab-item.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent implements AfterContentInit {

  @Input() isClosable = false; // tabs not closable by default
  @Output() onCloseTab?: EventEmitter<number> = new EventEmitter();

  @ContentChildren(TabItemComponent) items: QueryList<TabItemComponent>; // List of TabItemComponent;

  /**
   * Show the content of an active tab:
   * - Activate the first if there isn't an active tab
   */
  ngAfterContentInit(): void {
    if (this.items.length) {
      const activeTabs = this.items.filter(tab => tab.isActive);
      if (activeTabs.length === 0) {
        this.activateTabItem(this.items.first);
      }
    }
  }

  /**
   * Activate the tab selected by the user
   * - Deactivate all
   * - Activate selected tab
   * @param tab the selected tab
   */
  activateTabItem(tab: TabItemComponent): void {
    this.items.toArray().forEach(tab => tab.isActive = false);
    tab.isActive = true;
  }

  /**
   * Close the tab by index:
   * - If the tab closed was active, the first tab became active
   * @param index 
   */
  closeTab(index: number): void {
    if (this.items.toArray()[index].isActive && this.items.length > 1) {
      if (index == 0) {
        this.activateTabItem(this.items.toArray()[index + 1]);
      } else {
        this.activateTabItem(this.items.first);
      }
    }
    this.onCloseTab.emit(index);
  }

}
