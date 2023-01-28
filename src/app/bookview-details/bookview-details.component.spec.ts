import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookviewDetailsComponent } from './bookview-details.component';

describe('BookviewDetailsComponent', () => {
  let component: BookviewDetailsComponent;
  let fixture: ComponentFixture<BookviewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookviewDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
