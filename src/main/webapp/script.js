function calcularPromedio() {

    // Obtener los datos del formulario

    let nombre = document.getElementById("nombre").value;

    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value
    );

    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value
    );

    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value
    );

    let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value
    );


    // Validar que los datos estén completos

    if (
        nombre === "" ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)
    ) {

        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";

        return;
    }


    // Calcular promedio

    let promedio =
        (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;


    // Mostrar resultado

    if (promedio <= 10 && promedio >= 9) {

        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Excelente";

    }else if(promedio <= 8.9 && promedio >= 8){
        
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Muy bien";
    }else if(promedio <= 7.9 && promedio >= 7){
        
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Bien";
    }else if(promedio <= 7.9 && promedio >= 7){
        
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Bien";
    }else if(promedio <= 6.9 && promedio >= 6.5){
        
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Piensa en Conta";
    }else if(promedio <= 6.4 && promedio >= 6){
        
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Date de baja";
    }else{
        
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Vete a la 11";
    }

}

function limpiar(){
    let inputs = document.getElementsByTagName("input");
    for(let i = 0; i < inputs.length; i++){
        inputs.item(i).
    }
}