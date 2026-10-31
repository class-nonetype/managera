import { Component } from '@angular/core';
import { HlmProgressImports } from '@spartan-ng/helm/progress';

@Component({
	selector: 'progress-bar',
	imports: [HlmProgressImports],
	templateUrl: './progress-bar.html'
})
export class ProgressBarComponent {}
