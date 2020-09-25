import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewFriendPage } from './new-friend.page';

describe('NewFriendPage', () => {
  let component: NewFriendPage;
  let fixture: ComponentFixture<NewFriendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFriendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewFriendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
