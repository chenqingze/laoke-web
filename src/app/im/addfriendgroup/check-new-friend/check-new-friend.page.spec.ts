import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckNewFriendPage } from './check-new-friend.page';

describe('CheckNewFriendPage', () => {
  let component: CheckNewFriendPage;
  let fixture: ComponentFixture<CheckNewFriendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckNewFriendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckNewFriendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
