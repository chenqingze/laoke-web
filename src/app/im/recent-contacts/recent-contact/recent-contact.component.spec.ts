import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecentContactComponent } from './recent-contact.component';

describe('RecentContactComponent', () => {
  let component: RecentContactComponent;
  let fixture: ComponentFixture<RecentContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentContactComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
