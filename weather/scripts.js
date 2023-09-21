const key = "5dbb806f39a96dcb93ce9e997b815519"

async function buscarCity(city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`)
        .then(resposta => resposta.json())

    colocaDadosTela(dados)
}

function colocaDadosTela(dados) {
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = "Temperatura: " + Math.floor(dados.main.temp) + "°C"
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

function clickButton() {
    const city = document.querySelector(".input-city").value

    buscarCity(city)
}
