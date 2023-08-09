

const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value // Aqui só estou pegando o valor digitado no input
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valore em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas

    console.log(currencySelect.value)
    const dollarToday = 5.2
    const euroToday = 6.2
    const bitcoinToday = 146.271
    const libraToday = 6.25


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

    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("btc-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("gbp-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
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
        
        if (currencySelect.value == "libra"){
            currencyUSD.innerHTML = "Libra"
            currencyImg.src = "./assets/libra.png"
        }
        
        if (currencySelect.value == "bitcoin"){
            currencyUSD.innerHTML = "Bitcoin"
            currencyImg.src = "./assets/bitcoin.png"
        }
        
        convertValues()
    }


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)