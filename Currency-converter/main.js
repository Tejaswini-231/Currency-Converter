// document.addEventListener("DOMContentLoaded", () => {

//     const convertButton = document.querySelector("button[type='submit']");
//     const form = document.getElementById("currency-form");
//     let currencyInfo;

//     // Fetch the list of currencies
//     function getListOfCurrencies() {
//         return fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
//             .then(res => res.json());
//     }

//     // Populate currency options in the dropdowns
//     function buildCurrencyOptions() {
//         getListOfCurrencies().then(result => {
//             let fromCurrency = document.getElementById("from-currency");
//             let toCurrency = document.getElementById("to-currency");

//             for (let key in result) {
//                 let fromCurrencyOption = document.createElement("option");
//                 fromCurrencyOption.value = key;
//                 fromCurrencyOption.textContent = result[key];
//                 fromCurrency.appendChild(fromCurrencyOption);

//                 let toCurrencyOption = document.createElement("option");
//                 toCurrencyOption.value = key;
//                 toCurrencyOption.textContent = result[key];
//                 toCurrency.appendChild(toCurrencyOption);
//             }
//         });
//     }

//     // Fetch the currency conversion rates (relative to EUR by default)
//     function loadCurrencyValues() {
//         fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json")
//             .then(res => res.json())
//             .then(data => currencyInfo = data);
//     }

//     // Perform currency conversion
//     function convertCurrency(event) {
//         event.preventDefault(); // Prevent form submission from refreshing the page

//         let fromCurrency = document.getElementById("from-currency").value;
//         let toCurrency = document.getElementById("to-currency").value;

//         if (fromCurrency && toCurrency) {
//             let { eur } = currencyInfo;
//             let conversionRate = eur[toCurrency] / eur[fromCurrency];

//             let amountToConvert = document.getElementById("amount").valueAsNumber;
//             let result = (amountToConvert * conversionRate).toFixed(2);

//             let exchangeRateDiv = document.getElementById("exchange-rate");
//             exchangeRateDiv.textContent = `Converted Amount: ${result}`;
//         }
//     }

//     // Attach event listener to the form
//     form.addEventListener("submit", convertCurrency);

//     loadCurrencyValues();
//     buildCurrencyOptions();
// });
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("currency-form");
    const swapIcon = document.getElementById("swap-icon");
    let currencyInfo;

    // Fetch the list of currencies
    function getListOfCurrencies() {
        return fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
            .then(res => res.json());
    }

    // Populate currency options in the dropdowns
    function buildCurrencyOptions() {
        getListOfCurrencies().then(result => {
            let fromCurrency = document.getElementById("from-currency");
            let toCurrency = document.getElementById("to-currency");

            for (let key in result) {
                let fromCurrencyOption = document.createElement("option");
                fromCurrencyOption.value = key;
                fromCurrencyOption.textContent = result[key];
                fromCurrency.appendChild(fromCurrencyOption);

                let toCurrencyOption = document.createElement("option");
                toCurrencyOption.value = key;
                toCurrencyOption.textContent = result[key];
                toCurrency.appendChild(toCurrencyOption);
            }
        });
    }

    // Fetch the currency conversion rates (relative to EUR by default)
    function loadCurrencyValues() {
        fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json")
            .then(res => res.json())
            .then(data => currencyInfo = data);
    }

    // Perform currency conversion
    function convertCurrency(event) {
        event.preventDefault(); // Prevent form submission from refreshing the page

        let fromCurrency = document.getElementById("from-currency").value;
        let toCurrency = document.getElementById("to-currency").value;

        if (fromCurrency && toCurrency) {
            let { eur } = currencyInfo;
            let conversionRate = eur[toCurrency] / eur[fromCurrency];

            let amountToConvert = document.getElementById("amount").valueAsNumber;
            let result = (amountToConvert * conversionRate).toFixed(2);

            let exchangeRateDiv = document.getElementById("exchange-rate");
            exchangeRateDiv.textContent = `Converted Amount: ${result}`;
        }
    }

    // Swap currencies functionality
    function swapCurrencies() {
        let fromCurrency = document.getElementById("from-currency");
        let toCurrency = document.getElementById("to-currency");

        let temp = fromCurrency.value;
        fromCurrency.value = toCurrency.value;
        toCurrency.value = temp;
    }

    // Attach event listener to the form
    form.addEventListener("submit", convertCurrency);
    
    // Attach event listener for swap icon
    swapIcon.addEventListener("click", swapCurrencies);

    loadCurrencyValues();
    buildCurrencyOptions();
});

