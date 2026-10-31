import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignInTab } from './sign-in-tab';

describe('SignInTab', () => {
  let component: SignInTab;
  let fixture: ComponentFixture<SignInTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInTab],
    }).compileComponents();

    fixture = TestBed.createComponent(SignInTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
