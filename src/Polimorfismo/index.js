class Vehicle {
  move() {
    console.log("O veículo está se movendo.");
  }
}

class Car extends Vehicle {
  move() {
    console.log("O Carro está se movendo.");
  }
}

class Ship extends Vehicle {
  move() {
    console.log("O navio está navegando.");
  }
}

class Aircraft extends Vehicle {
  move(speed) {
    console.log(`A aeronvave está voando a ${speed} km/h.`);
  }
}

const deloren = new Car();
const blackPearl = new Ship();
const epoch = new Aircraft();

// deloren.move();
// blackPearl.move();
// epoch.move(100);

function start(vehicle) {
  console.log("Iniciando um veículo");
  vehicle.move();
}

start(deloren);
start(blackPearl);
start(epoch);
