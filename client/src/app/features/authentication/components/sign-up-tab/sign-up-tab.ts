import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';

@Component({
	imports: [HlmTabsImports, HlmCardImports, HlmFieldImports, HlmLabelImports, HlmInputImports, HlmButtonImports],
  selector: 'authentication-page__sign-up-tab',
  styleUrl: './sign-up-tab.css',
  templateUrl: './sign-up-tab.html',
})
export class SignUpTabComponent {}
