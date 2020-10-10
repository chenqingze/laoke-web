import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatWindow1Page } from './chat-window1.page';

describe('ChatWindow1Page', () => {
  let component: ChatWindow1Page;
  let fixture: ComponentFixture<ChatWindow1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatWindow1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatWindow1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
