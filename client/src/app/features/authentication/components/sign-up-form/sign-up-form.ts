import { Component, inject, output, signal } from '@angular/core';
import { email, form, FormField, FormRoot, minLength, required } from '@angular/forms/signals';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { SignUpData } from '../../models/sign-up-data';
import { AuthenticationService } from '../../../../core/services/authentication';

@Component({
  imports: [FormField, FormRoot, HlmFieldImports, HlmInputImports, HlmButtonImports],
  selector: 'app-sign-up-form',
  host: { class: 'block w-full max-w-sm' },
  styleUrl: './sign-up-form.css',
  templateUrl: './sign-up-form.html',
})
export class SignUpForm {
  private readonly authenticationService = inject(AuthenticationService);

  readonly signInRequested = output<void>();
  readonly signedUp = output<void>();

  protected readonly model = signal<SignUpData>({ name: '', email: '', password: '' });
  protected readonly signUpForm = form(
    this.model,
    (path) => {
      required(path.name, { message: 'Ingresa tu nombre' });
      required(path.email, { message: 'Ingresa tu correo' });
      email(path.email, { message: 'El correo no es válido' });
      required(path.password, { message: 'Ingresa una contraseña' });
      minLength(path.password, 8, { message: 'Mínimo 8 caracteres' });
    },

    {
      submission: {
        action: async (f) => {
          try {

            console.log(f().value());

            await this.authenticationService.signUp(f().value());
            this.signedUp.emit();
            return undefined;
          } catch {
            return { kind: 'sign-up', message: 'No se pudo crear la cuenta. Intenta de nuevo.' };
          }
        },
      },
    },
  );
}
