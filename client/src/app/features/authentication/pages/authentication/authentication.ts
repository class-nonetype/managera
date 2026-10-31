import { Component, signal } from '@angular/core';
import { SignInFormComponent } from '../../components/sign-in-form/sign-in-form';
import { SignUpForm } from '../../components/sign-up-form/sign-up-form';

@Component({
  imports: [SignInFormComponent, SignUpForm],
  selector: 'authentication-page',
  styleUrl: './authentication.css',
  templateUrl: './authentication.html',
})
export class AuthenticationPage {
  protected readonly mode = signal<'sign-in' | 'sign-up'>('sign-in');
}
