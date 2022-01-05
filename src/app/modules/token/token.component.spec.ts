import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenComponent } from './token.component';

describe('LoginComponent', () => {
  let component: TokenComponent;
  let fixture: ComponentFixture<TokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TokenComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});