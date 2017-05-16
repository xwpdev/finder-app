import { Component } from '@angular/core';

import { NearbyPage } from '../nearby/nearby';
import { HistoryPage } from '../history/history';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NearbyPage;
  tab2Root = HistoryPage;

  constructor() {

  }
}
