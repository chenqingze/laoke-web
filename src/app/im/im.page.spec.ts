import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ImPage} from './im.page';

describe('ImPage', () => {
    let component: ImPage;
    let fixture: ComponentFixture<ImPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ImPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(ImPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
