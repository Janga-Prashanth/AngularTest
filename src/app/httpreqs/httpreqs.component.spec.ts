import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpreqsComponent } from './httpreqs.component';

describe('HttpreqsComponent', () => {
  let component: HttpreqsComponent;
  let fixture: ComponentFixture<HttpreqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpreqsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpreqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
