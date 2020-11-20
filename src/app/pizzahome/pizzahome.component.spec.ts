import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzahomeComponent } from './pizzahome.component';

describe('PizzahomeComponent', () => {
  let component: PizzahomeComponent;
  let fixture: ComponentFixture<PizzahomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzahomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
