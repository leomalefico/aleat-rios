
document.getElementById("combustivelForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var precoGasolina = parseFloat(document.getElementById("precoGasolina").value);
    var precoAlcool = parseFloat(document.getElementById("precoAlcool").value);
    var consumoGasolina = parseFloat(document.getElementById("consumoGasolina").value);
    var consumoAlcool = parseFloat(document.getElementById("consumoAlcool").value);

    var custoPorKmGasolina = precoGasolina / consumoGasolina;
    var custoPorKmAlcool = precoAlcool / consumoAlcool;

    if (custoPorKmAlcool < custoPorKmGasolina) {
        document.getElementById("resultado").innerText = "Álcool é mais vantajoso.";
    } else if (custoPorKmAlcool > custoPorKmGasolina) {
        document.getElementById("resultado").innerText = "Gasolina é mais vantajosa.";
    } else {
        document.getElementById("resultado").innerText = "Ambos têm o mesmo custo por quilômetro.";
    }
});

