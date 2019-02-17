import { cryptoAPI } from "./app.js";

class UI {
	constructor() {
		this.init();
	}
	init() {
		this.printCryptoCurrencies();
	}

	printCryptoCurrencies() {
		cryptoAPI.getCryptoCurrenciesList().then(data => {
			const cryptoCurrencies = data.cryptoCurrencies,
				select = document.getElementById("cryptocurrency");
			cryptoCurrencies.forEach(currency => {
				const option = document.createElement("option");
				option.value = currency.id;
				option.appendChild(document.createTextNode(currency.name));
				select.appendChild(option);
			});
		});
	}

	printAlert(errorField) {
		errorField.textContent = "You have to select both of fields";
	}

	removeAlert(errorField) {
		errorField.textContent = "";
	}

	printResult(result, currency, currencySymbol) {
		let currencyName;
		currencyName = "price_" + currency.toLowerCase();

		const value = result[currencyName];

		const hourChange = parseFloat(result.percent_change_1h),
			dayChange = parseFloat(result.percent_change_24h),
			weekChange = parseFloat(result.percent_change_7d);

		let HTMLTemplate = "";

		HTMLTemplate += `
      <h2 class="heading-secondary margin-bottom--small">Result:</h2>
      <p class="result__paragraph">The Price of <span class="result__important">${result.name}</span> is equal to <span class="result__important">${value} ${currencySymbol}</span></p>
      <p class="result__paragraph">Hourly change: <span class="result__important" id="hour-change"> ${hourChange}%</span></p>
      <p class="result__paragraph">Daily  change: <span class="result__important" id="day-change"> ${dayChange}%</span></p>
      <p class="result__paragraph">Weekly change: <span class="result__important" id="week-change"> ${weekChange}%</span></p>
    `;

		const resultField = document.querySelector("#result-field");
		resultField.innerHTML = HTMLTemplate;

		const hourChangeContainer = document.getElementById("hour-change");
		hourChange > 0 ? (hourChangeContainer.style.color = "green") : (hourChangeContainer.style.color = "red");

		const dayChangeContainer = document.getElementById("day-change");
		dayChange > 0 ? (dayChangeContainer.style.color = "green") : (dayChangeContainer.style.color = "red");

		const weekChangeContainer = document.getElementById("week-change");
		weekChange > 0 ? (weekChangeContainer.style.color = "green") : (weekChangeContainer.style.color = "red");
	}

	printTheMostPopular(constainerCurrency, percentChange1h, percentChange1d, percentChange7d, dataSet) {
		let HTMLTemplate = "";

		HTMLTemplate += `
      <p class="most-popular__paragraph">Hourly change: <span class="most-popular__important" id="${dataSet}-hourly"> ${percentChange1h}%</span></p>
      <p class="most-popular__paragraph">Daily change: <span class="most-popular__important" id="${dataSet}-daily"> ${percentChange1d}%</span></p>
      <p class="most-popular__paragraph">Weekly change: <span class="most-popular__important" id="${dataSet}-weekly"> ${percentChange7d}%</span></p>
    `;

		constainerCurrency.innerHTML += HTMLTemplate;

		const hourChangeContainer = document.getElementById(`${dataSet}-hourly`);
		percentChange1h > 0 ? (hourChangeContainer.style.color = "green") : (hourChangeContainer.style.color = "red");

		const dayChangeContainer = document.getElementById(`${dataSet}-daily`);
		percentChange1d > 0 ? (dayChangeContainer.style.color = "green") : (dayChangeContainer.style.color = "red");

		const weekChangeContainer = document.getElementById(`${dataSet}-weekly`);
		percentChange7d > 0 ? (weekChangeContainer.style.color = "green") : (weekChangeContainer.style.color = "red");
	}
}

export { UI };
