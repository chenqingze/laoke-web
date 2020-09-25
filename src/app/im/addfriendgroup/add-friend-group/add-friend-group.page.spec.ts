import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFriendGroupPage } from './add-friend-group.page';

describe('AddFriendGroupPage', () => {
  let component: AddFriendGroupPage;
  let fixture: ComponentFixture<AddFriendGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFriendGroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFriendGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
