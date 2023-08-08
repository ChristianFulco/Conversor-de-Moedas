

const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value // Aqui só estou pegando o valor digitado no input
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valore em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas

    console.log(currencySelect.value)
    const dollarToday = 5.2
    const euroToday = 6.2


    if(currencySelect.value == "dollar"){ //Se o select estiver selecionado o valolr de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dollarToday)

    }
    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {          //Esse é o modelo de  código para formatar o número
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}


    function changeCurrency() {
        const currencyUSD = document.getElementById("currency-usd")
        const currencyImg = document.querySelector(".currency-img")

        if (currencySelect.value == "dollar"){
            currencyUSD.innerHTML = "Dólar americano"
            currencyImg.src = "./assets/dollar.png"
        }

        if (currencySelect.value == "euro"){
            currencyUSD.innerHTML = "Euro"
            currencyImg.src = "./assets/euro.png"
        }
        
        convertValues()
    }


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)