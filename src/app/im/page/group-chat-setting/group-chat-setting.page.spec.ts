import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {GroupChatSettingPage} from './group-chat-setting.page';

describe('GroupChatSettingPage', () => {
  let component: GroupChatSettingPage;
  let fixture: ComponentFixture<GroupChatSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupChatSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupChatSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
