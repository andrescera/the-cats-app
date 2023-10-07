import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ViewMessagePageRoutingModule } from './view-cat-routing.module';
import { ViewCatPage } from './view-cat.page';

describe('ViewMessagePage', () => {
  let component: ViewCatPage;
  let fixture: ComponentFixture<ViewCatPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ViewCatPage],
      imports: [IonicModule.forRoot(), ViewMessagePageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewCatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
