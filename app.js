const cashInput = document.getElementById("cash");
const bankInput = document.getElementById("bank");
const networkInput = document.getElementById("network");
const totalElem = document.getElementById("total");
const cashElem = document.getElementById("current-cash-value");
const bankElem = document.getElementById("current-bank-value");
const networkElem = document.getElementById("current-network-value");
const updateBtn = document.getElementById("update-totals");
// const historyList = document.getElementById("cash");

function updateTotals() {
	const cash = parseFloat(cashInput.value) || 0;
	const bank = parseFloat(bankInput.value) || 0;
	const network = parseFloat(networkInput.value) || 0;
	const total = cash + bank + network;
	console.log(cash, bank, network);

	totalElem.textContent = total.toFixed(2);
	cashElem.textContent = cash.toFixed(2);
	bankElem.textContent = bank.toFixed(2);
	networkElem.textContent = network.toFixed(2);

	return { cash, bank, network, total };
}

updateBtn.addEventListener("click", () => {
	const { cash, bank, network, total } = updateTotals();
});
