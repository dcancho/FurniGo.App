import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertoPerfilComponent } from './experto-perfil.component';

describe('ExpertoPerfilComponent', () => {
  let component: ExpertoPerfilComponent;
  let fixture: ComponentFixture<ExpertoPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertoPerfilComponent]
    });
    fixture = TestBed.createComponent(ExpertoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
