
class Carro {
    constructor(marca, color, motor){
        this.marca = marca;
        this.color = color;
        this.motor = motor;
    }

    arranca(funciona) {
        if(funciona){
            console.log("El auto arranco...");
        }
    }

    detiene() {
        console.log("El auto se detuvo..");
    }
}

const mazda = new Carro("3", "rojo", 2.4);
console.log(mazda);

class Chela {
    constructor(marca, origen, clara, grados){
        this.marca = marca;
        this.origen = origen;
        this.clara = clara;
        this.grados = grados;
    }

    chela(){
        console.log("La cerveza es de la marca" + this.marca); 
    }

    actualizaGrados(newGrados){
        this.grados = newGrados;
        console.log(this.grados);   
    }

    origen() {
        if(this.clara){
          console.log(`La cerveza ${this.marca} viene de ${this.origen} y es clara`);
        } else {
            console.log(`La cerveza ${this.marca} viene de ${this.origen} y es oscura`);
        }
    }
}