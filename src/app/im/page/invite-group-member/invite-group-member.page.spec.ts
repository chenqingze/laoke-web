import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InviteGroupMemberPage } from './invite-group-member.page';

describe('InviteGroupMemberPage', () => {
  let component: InviteGroupMemberPage;
  let fixture: ComponentFixture<InviteGroupMemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteGroupMemberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InviteGroupMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
