import {CommonModule} from '@angular/common';
import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IonicModule, Platform} from '@ionic/angular';
import {DataService} from '../../services/data.service';
import Cat from "../../models/cats";


@Component({
  selector: 'app-view-cat',
  templateUrl: './view-cat.html',
  styleUrls: ['./view-cat.page.scss'],
})
export class ViewCatPage implements OnInit {
  public cat!: Cat;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);

  constructor() {
  }

  ngOnInit() {
    const index = this.activatedRoute.snapshot.paramMap.get('index') as string;
    this.cat = this.data.getCatByIndex(parseInt(index, 10));
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
  }
}
