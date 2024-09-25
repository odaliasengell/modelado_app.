document.addEventListener("DOMContentLoaded", function () {
    const botonCalcular = document.getElementById("calcular");
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const hint1 = document.getElementById("hint1");
    const hint2 = document.getElementById("hint2");

    // Mostrar mensajes interactivos al escribir en los campos de entrada
    num1Input.addEventListener("input", function () {
        if (num1Input.value === "") {
            hint1.textContent = "Este campo no puede estar vacío.";
            hint1.classList.add("show");
        } else {
            hint1.textContent = "";
            hint1.classList.remove("show");
        }
    });

    num2Input.addEventListener("input", function () {
        if (num2Input.value === "") {
            hint2.textContent = "Este campo no puede estar vacío.";
            hint2.classList.add("show");
        } else {
            hint2.textContent = "";
            hint2.classList.remove("show");
        }
    });

    botonCalcular.addEventListener("click", realizarOperaciones);
});

function realizarOperaciones() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    // Validación de números
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    // Crear un array con las operaciones y sus resultados
    const operaciones = [
        { nombre: "Suma", resultado: num1 + num2 },
        { nombre: "Resta", resultado: num1 - num2 },
        { nombre: "Multiplicación", resultado: num1 * num2 },
        { nombre: "División", resultado: num2 !== 0 ? num1 / num2 : "No se puede dividir por cero" },
        { nombre: "Módulo", resultado: num2 !== 0 ? num1 % num2 : "No se puede calcular el módulo por cero" }
    ];

    // Mostrar los resultados en los cuadros separados
    for (let i = 0; i < 5; i++) {
        const resultadoDiv = document.getElementById(`result${i + 1}`);
        resultadoDiv.innerHTML = `<strong>${operaciones[i].nombre}:</strong> ${operaciones[i].resultado}`;
        resultadoDiv.classList.remove('hidden');
    }
}
