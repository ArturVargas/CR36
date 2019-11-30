
let usuario = {}
let usuarios = []
let i = 0;

const register = () => {
   let nombre = prompt("Da el nombre: ");
   let correo = prompt("De el correo: ");
   let pass = prompt("Da un password: ");
    usuario[i].nombre = nombre;
    usuario[i].email = correo;
    usuario[i].pass = pass;
    usuarios.push(usuario);
    i++;
    console.log(usuarios);
}


