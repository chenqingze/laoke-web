import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditGroupNoticePage } from './edit-group-notice.page';

describe('EditGroupNoticePage', () => {
  let component: EditGroupNoticePage;
  let fixture: ComponentFixture<EditGroupNoticePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGroupNoticePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditGroupNoticePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
