import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RemoveGroupMemberPage } from './remove-group-member.page';

describe('RemoveGroupMemberPage', () => {
  let component: RemoveGroupMemberPage;
  let fixture: ComponentFixture<RemoveGroupMemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveGroupMemberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RemoveGroupMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
