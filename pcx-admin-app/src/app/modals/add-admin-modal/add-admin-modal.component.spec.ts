import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminModalComponent } from './add-admin-modal.component';

describe('AddAdminModalComponent', () => {
  let component: AddAdminModalComponent;
  let fixture: ComponentFixture<AddAdminModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAdminModalComponent]
    });
    fixture = TestBed.createComponent(AddAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
