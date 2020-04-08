import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsigInputFelizComponent } from './usig-input-feliz.component';

describe('UsigInputFelizComponent', () => {
  let component: UsigInputFelizComponent;
  let fixture: ComponentFixture<UsigInputFelizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsigInputFelizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsigInputFelizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
