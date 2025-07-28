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

let lastTotals = { cash: 0, bank: 0, network: 0, total: 0 };

function updateTotals() {
	const cash = parseFloat(cashInput.value) || 0;
	const bank = parseFloat(bankInput.value) || 0;
	const network = parseFloat(networkInput.value) || 0;
	const total = cash + bank + network;

	totalElem.textContent = total.toFixed();
	cashElem.textContent = cash.toFixed();
	bankElem.textContent = bank.toFixed();
	networkElem.textContent = network.toFixed();

	return { cash, bank, network, total };
}

updateBtn.addEventListener("click", () => {
	lastTotals = updateTotals();
});

addHistory.addEventListener("click", () => {
	const now = new Date().toLocaleDateString();
	const { cash, bank, network, total } = lastTotals;
	const entryHTML = `
        <div class="entry">
            <div><strong><p>Date:</p></strong><p>${now}</p></div>
            <div><strong><p>Cash:</p></strong><div class="entry-number"><p>$</p><p>${cash.toFixed()}</p></div></div>
            <div><strong><p>Bank:</p></strong><div class="entry-number"><p>$</p><p>${bank.toFixed()}</p></div></div>
            <div><strong><p>Network:</p></strong><div class="entry-number"><p>$</p><p>${network.toFixed()}</p></div></div>
            <div><strong><p>Total:</p></strong><div class="entry-number"><p>$</p><p>${total.toFixed()}</p></div></div>
        </div>
    `;
	historyContainer.insertAdjacentHTML("beforeend", entryHTML);
});
