import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpTab } from './sign-up-tab';

describe('SignUpTab', () => {
  let component: SignUpTab;
  let fixture: ComponentFixture<SignUpTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpTab],
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
