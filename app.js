const cashInput = document.getElementById("cash");
const bankInput = document.getElementById("bank");
const networkInput = document.getElementById("network");
const totalElem = document.getElementById("total");
const cashElem = document.getElementById("current-cash-value");
const bankElem = document.getElementById("current-bank-value");
const networkElem = document.getElementById("current-network-value");
const updateBtn = document.getElementById("update-totals");
const addHistory = document.getElementById("add-history");
const historyContainer = document.querySelector(".history");

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

addHistory.addEventListener("click", () => {
	const now = new Date().toLocaleString();
	const cash = parseFloat(cashElem.textContent) || 0;
	const bank = parseFloat(bankElem.textContent) || 0;
	const network = parseFloat(networkElem.textContent) || 0;
	const total = parseFloat(totalElem.textContent) || 0;

	const entryHTML = `
        <div class="entry">
            <div><strong><p>Date:</p></strong><p>${now}</p></div>
            <div><strong><p>Cash:</p></strong><p>${cash.toFixed(2)}</p></div>
            <div><strong><p>Bank:</p></strong><p>${bank.toFixed(2)}</p></div>
            <div><strong><p>Network:</p></strong><p>${network.toFixed(
													2
												)}</p></div>
            <div><strong><p>Total:</p></strong><p>${total.toFixed(2)}</p></div>
        </div>
    `;
	historyContainer.insertAdjacentHTML("beforeend", entryHTML);
});
