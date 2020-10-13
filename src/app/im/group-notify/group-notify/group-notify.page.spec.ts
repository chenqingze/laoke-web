import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroupNotifyPage } from './group-notify.page';

describe('GroupNotifyPage', () => {
  let component: GroupNotifyPage;
  let fixture: ComponentFixture<GroupNotifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupNotifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupNotifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
