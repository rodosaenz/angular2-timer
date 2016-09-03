import { Component } from '@angular/core';

@Component({
  selector: 'my-timer',
  template: `
  	<div class="text-center">
  		<img src="assets/img/reloj.png" alt="Reloj">
	  	<h1> {{ minutos }}:{{ segundos | number: '2.0' }}</h1>
	  	<p>
	  		<button (click)="togglePause()"
	  			class="btn btn-sm btn-danger">
	  			{{ buttonLabel }}
	  		</button>
	  	</p>
  	</div>
  	`
})

export class AppComponent {
	
	minutos: number;
	segundos: number;
	isPaused: boolean;
	buttonLabel: string;

	constructor() {
		this.resetTimer();
		setInterval(() => this.tick(), 1000);
	}

	resetTimer(): void {
		this.minutos = 2;
		this.segundos = 59;
		this.buttonLabel = 'Empezar';
		this.togglePause();
	}

	private tick(): void {
		if (!this.isPaused) {
			this.buttonLabel = "Detener";

			if (--this.segundos < 0){
				this.segundos = 59;
				if (--this.minutos < 0){
					this.resetTimer();
				}
			}
		}
	}

	togglePause(): void {
		this.isPaused = !this.isPaused;
		if(this.minutos < 2 || this.segundos < 59){
			this.buttonLabel = this.isPaused ? 'Reanudar' : 'Detener';
		}
	}
}