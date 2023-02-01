import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofregisterComponent } from './listofregister.component';

describe('ListofregisterComponent', () => {
  let component: ListofregisterComponent;
  let fixture: ComponentFixture<ListofregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
