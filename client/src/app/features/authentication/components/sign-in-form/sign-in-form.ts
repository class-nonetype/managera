import { Component, inject, output, signal } from '@angular/core';
import { email, form, FormField, FormRoot, maxLength, minLength, required } from '@angular/forms/signals';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { Credentials } from '../../models/credentials';
import { AuthenticationService } from '../../../../core/services/authentication';
import { ProgressBarComponent } from '../../../../shared/components/progress-bar/progress-bar';

@Component({
	selector: 'sign-in-form',
	imports: [FormField,
    FormRoot,
    HlmFieldImports,
    HlmInputImports,
    HlmButtonImports,
    ProgressBarComponent,],
	host: { class: 'block w-full max-w-sm' },
	templateUrl: './sign-in-form.html'
})
export class SignInFormComponent {
  private readonly authenticationService = inject(AuthenticationService);

  readonly signUpRequested = output<void>();

  protected readonly model = signal<Credentials>({ email: '', password: '' });
  protected readonly signInForm = form(
    this.model,
    (path) => {
      required(path.email, { message: 'Ingresa tu correo' });
      email(path.email, { message: 'El correo no es válido' });
      required(path.password, { message: 'Ingresa tu contraseña' });
      minLength(path.password, 8, { message: 'Mínimo 8 carácteres' });
      maxLength(path.password, 15, { message: 'Máximo 15 carácteres'});
    },

    {
      submission: {
        action: async (f) => {
          try {
            await new Promise((resolve) => setTimeout(resolve, 5000));

            await this.authenticationService.signIn(f().value());
            //await this.router.navigate(['/proyectos']);
            return undefined;
          } catch {
            return { kind: 'authentication', message: 'Correo o contraseña incorrectos' };
          }
        },
      },
    },
  );

}
