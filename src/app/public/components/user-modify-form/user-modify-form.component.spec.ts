import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModifyFormComponent } from './user-modify-form.component';

describe('ModifyFormComponent', () => {
  let component: UserModifyFormComponent;
  let fixture: ComponentFixture<UserModifyFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserModifyFormComponent]
    });
    fixture = TestBed.createComponent(UserModifyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
