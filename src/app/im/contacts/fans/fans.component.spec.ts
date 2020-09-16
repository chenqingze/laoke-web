import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {FansComponent} from './fans.component';

describe('FansComponent', () => {
    let component: FansComponent;
    let fixture: ComponentFixture<FansComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FansComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(FansComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
