import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {Platform} from '@ionic/angular';
import Cat from "../../models/cats";

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatComponent {
  private platform = inject(Platform);
  @Input() cat?: Cat;
  @Input() index?: number;


  isIos() {
    return this.platform.is('ios')
  }
}
