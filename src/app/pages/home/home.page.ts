import {Component, inject} from '@angular/core';
import {RefresherCustomEvent} from '@ionic/angular';
import {CatComponent} from '../../components/cat/cat.component';

import {DataService} from '../../services/data.service';
import Cat from "../../models/cats";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(DataService);

  constructor() {
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  ionViewWillEnter() {
    this.data.getCats();
  }

  getCats(): Cat[] {
    return this.data.cats;
  }
}
