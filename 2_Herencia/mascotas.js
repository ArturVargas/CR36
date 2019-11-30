
class Mascota {
    constructor(nombre, patas){
        this.cerebro = true;
        this.nombre = nombre;
        this.patas = patas;
        console.log("Se creo la mascota");
    }

    getNombre() {
        return this.nombre;
    }
}

class Perro extends Mascota {
    constructor(pulgas, raza, color, nombre){
        super(nombre, 4)
        this.pulgas = pulgas;
        this.raza = raza;
        this.color = color;
    }
    ladrar(){
        return "Wuaauu";
    }
}

class Gato extends Mascota {
    constructor(vidas, raza, pelusa, edad,
         unias, color, botas, nombre){
        super(nombre, 3)
        this.vidas = vidas;
        this.raza = raza;
        this.pelusa = pelusa;
        this.edad = edad;
        this.garras = unias;
        this.color = color;
        this.botas = botas;
    }

    ronronear(){
        return "Grrrr!!";
    }
    quitarVida(){
        this.vidas = this.vidas -1;
    }
    tieneBotas(){
        if(this.botas){
            console.log("Es el gato con botas");
        } else {
            console.log("Es el gato sin botas");
        }
    }
    setColor(newColor){
        this.color = newColor;
        console.log(`El gato es de color ${this.color}`)
    }
}