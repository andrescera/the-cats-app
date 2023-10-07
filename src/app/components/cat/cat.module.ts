import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CatComponent } from './cat.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, RouterModule, NgOptimizedImage],
  declarations: [CatComponent],
  exports: [CatComponent]
})
export class MessageComponentModule {}
