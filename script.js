class Vehicle {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}
	honk() {
		console.log("Beep.");
	}
	toString() {
		const { make, model, year } = this;
		console.log(`The vehicle is a ${make} ${model} from ${year}.`);
	}
}

class Car extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 4;
	}
}

class Motorcycle extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 2;
	}
	revEngine() {
		console.log("VROOM!!!");
	}
}

class Garage {
	constructor(capacity) {
		this.capacity = capacity;
		this.vehicles = [];
	}
	add(vehicle) {
		if (vehicle instanceof Car || vehicle instanceof Motorcycle) {
			if (this.vehicles.length < this.capacity) {
				this.vehicles.push(vehicle);
				console.log("Vehicle added!");
			} else {
				console.log("Sorry, we're full.");
			}
		} else {
			console.log("Only vehicles are allowed in here!");
		}
	}
}