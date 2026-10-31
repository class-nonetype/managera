import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';
import { SignInTabComponent } from '../sign-in-tab/sign-in-tab';
import { SignUpTabComponent } from '../sign-up-tab/sign-up-tab';

@Component({
	selector: 'authentication-page__tabs',
	imports: [HlmTabsImports, HlmCardImports, HlmLabelImports, HlmInputImports, HlmButtonImports, SignInTabComponent, SignUpTabComponent],
	host: {
		class: 'block w-full max-w-lg',
	},
	styleUrl: './tabs.css',
	templateUrl: './tabs.html'
})
export class Tabs {}
