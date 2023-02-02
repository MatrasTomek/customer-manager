import { Component } from '@angular/core';
import { Customer } from './model';

@Component({
	selector: 'app-root',
	template: `
		<div class="container" style="margin-top: 2rem">
			<div class="card" style="padding: 1rem">
				<div class="card-title">
					<h1 [style.color]="nameColor" [class.isActive]="isActive">{{ customer.name }}</h1>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col-sm-8">
							<p>{{ customer.description }}</p>
							<p>Wiek: {{ customer.age }}</p>
							<p>Adres: {{ customer.adress.street }} {{ customer.adress.houseNumber }}, {{ customer.adress.city }}</p>
							<button class="btn btn-outline-primary" (click)="changeIsActive()" type="button">Przełacz podkreślenie</button>
							<button class="btn btn-outline-primary" (click)="onChangeColor()" type="button">Przełącz kolor</button>
						</div>
						<div class="col-sm-4">
							<img [src]="customer.photoUrl" alt="" class="img-thumbnail"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
	styles: [
		`
			.isActive {
				text-decoration: underline;
			}
		`,
	],
})
export class AppComponent {
	customer: Customer = {
		name: 'Jan Kowalski',
		photoUrl: 'assets/images/cat.jpg',
		description: 'important client',
		age: 45,
		adress: {
			street: 'Pomarańczowa',
			houseNumber: 124,
			city: 'Tłuszcz',
		},
	};

	nameColor: string = 'blue';
	isActive: boolean = true;
	constructor() {}

	changeIsActive() {
		this.isActive = !this.isActive;
	}

	onChangeColor(){}
}

