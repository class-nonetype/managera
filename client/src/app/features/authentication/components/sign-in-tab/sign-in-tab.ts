import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';

@Component({
	selector: 'authentication-page__sign-in-tab',
	imports: [HlmTabsImports, HlmCardImports, HlmFieldImports, HlmLabelImports, HlmInputImports, HlmButtonImports],
	host: {
		class: 'block w-full max-w-lg',
	},
  templateUrl: './sign-in-tab.html',
})
export class SignInTabComponent {}
