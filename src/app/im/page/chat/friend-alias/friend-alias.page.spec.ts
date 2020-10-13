import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {FriendAliasPage} from './friend-alias.page';

describe('FriendAliasPage', () => {
  let component: FriendAliasPage;
  let fixture: ComponentFixture<FriendAliasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendAliasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FriendAliasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
