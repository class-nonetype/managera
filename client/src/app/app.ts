import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignInFormComponent } from './features/authentication/components/sign-in-form/sign-in-form';
import { AuthenticationPage } from './features/authentication/pages/authentication/authentication';

@Component({
  imports: [RouterOutlet, AuthenticationPage],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('managera');
}
