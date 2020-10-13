import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {GroupQrCodePage} from './group-qr-code.page';

describe('GroupQrCodePage', () => {
  let component: GroupQrCodePage;
  let fixture: ComponentFixture<GroupQrCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupQrCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupQrCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
