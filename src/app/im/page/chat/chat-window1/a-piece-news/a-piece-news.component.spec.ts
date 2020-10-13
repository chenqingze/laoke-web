import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {APieceNewsComponent} from './a-piece-news.component';

describe('APieceNewsComponent', () => {
  let component: APieceNewsComponent;
  let fixture: ComponentFixture<APieceNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APieceNewsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(APieceNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
