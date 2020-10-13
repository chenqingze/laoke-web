import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ChangeUserGroupNamePage} from './change-user-group-name.page';

describe('ChangeUserGroupNamePage', () => {
  let component: ChangeUserGroupNamePage;
  let fixture: ComponentFixture<ChangeUserGroupNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeUserGroupNamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeUserGroupNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
