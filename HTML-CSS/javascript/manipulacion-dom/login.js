const Usuario = document.getElementById("Usuario").value;
const Contraseña = document.getElementById("Contraseña").value;

const user = "fede";
const pass = "1234";


button.addEventListener("click", {
    if (Usuario === user && Contraseña === pass){
        localStorage.setItem("sesion", "activa");
        Empleados();
     }
})