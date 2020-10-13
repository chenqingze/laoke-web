import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetGroupNamePage } from './set-group-name.page';

describe('SetGroupNamePage', () => {
  let component: SetGroupNamePage;
  let fixture: ComponentFixture<SetGroupNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetGroupNamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetGroupNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
