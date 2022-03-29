import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecondWithTabsPage } from './second-with-tabs.page';

describe('SecondWithTabsPage', () => {
  let component: SecondWithTabsPage;
  let fixture: ComponentFixture<SecondWithTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondWithTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecondWithTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
