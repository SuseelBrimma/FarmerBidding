import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuserregisterComponent } from './adminuserregister.component';

describe('AdminuserregisterComponent', () => {
  let component: AdminuserregisterComponent;
  let fixture: ComponentFixture<AdminuserregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminuserregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminuserregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
