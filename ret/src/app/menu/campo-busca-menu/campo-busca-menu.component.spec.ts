import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoBuscaMenuComponent } from './campo-busca-menu.component';

describe('CampoBuscaMenuComponent', () => {
  let component: CampoBuscaMenuComponent;
  let fixture: ComponentFixture<CampoBuscaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoBuscaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoBuscaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
