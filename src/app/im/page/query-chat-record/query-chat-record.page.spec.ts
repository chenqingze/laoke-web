import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {QueryChatRecordPage} from './query-chat-record.page';

describe('QueryChatRecordPage', () => {
  let component: QueryChatRecordPage;
  let fixture: ComponentFixture<QueryChatRecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryChatRecordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QueryChatRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
