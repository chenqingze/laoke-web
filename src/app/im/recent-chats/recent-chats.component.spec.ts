import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecentChatsComponent } from './recent-chats.component';

describe('RecentChatsComponent', () => {
  let component: RecentChatsComponent;
  let fixture: ComponentFixture<RecentChatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentChatsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecentChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
