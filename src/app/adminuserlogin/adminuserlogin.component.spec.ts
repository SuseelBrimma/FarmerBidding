import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuserloginComponent } from './adminuserlogin.component';

describe('AdminuserloginComponent', () => {
  let component: AdminuserloginComponent;
  let fixture: ComponentFixture<AdminuserloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminuserloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminuserloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
