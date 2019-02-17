import { CryptoAPI } from "./cryptoAPI.js";
import { UI } from "./ui.js";

const cryptoAPI = new CryptoAPI();
const ui = new UI();

const btn = document.querySelector("#check-price");

btn.addEventListener("click", e => {
	e.preventDefault();
	const currencySelect = document.querySelector("#standard-currency").value,
		cryptoCurrencySelect = document.querySelector("#cryptocurrency").value,
		errorField = document.querySelector("#error-select");

	if (currencySelect === "" || cryptoCurrencySelect === "") {
		ui.printAlert(errorField);
	} else {
		ui.removeAlert(errorField);

		const index = document.querySelector("#standard-currency").selectedIndex,
			currencySymbol = document.querySelector("#standard-currency")[index].dataset.symbol;

		cryptoAPI.queryAPI(currencySelect, cryptoCurrencySelect, currencySymbol).then(data => {
			ui.printResult(data.result[0], currencySelect, currencySymbol);
		});
	}
});

async function selectTheMostPopular() {
	cryptoAPI.getCryptoCurrenciesList().then(data => {
		const currencyContainers = document.querySelectorAll(".most-popular__single-currency");

		currencyContainers.forEach(currencyContainers => {
			let dataSet = currencyContainers.dataset.currency;
			const currencies = data.cryptoCurrencies,
				singleCurrency = currencies.find(currency => currency.symbol == dataSet),
				constainerCurrency = document.querySelector(`[data-currency='${dataSet}']`),
				percentChange1h = parseFloat(singleCurrency.percent_change_1h),
				percentChange1d = parseFloat(singleCurrency.percent_change_24h),
				percentChange7d = parseFloat(singleCurrency.percent_change_7d);

			ui.printTheMostPopular(constainerCurrency, percentChange1h, percentChange1d, percentChange7d, dataSet);
		});
	});
}

document.addEventListener("DOMContentLoaded", selectTheMostPopular);

export { cryptoAPI };
