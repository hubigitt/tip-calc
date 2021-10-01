const billInput = document.querySelector(".bill-input");
const numPplInput = document.querySelector(".num-ppl-input");
const tipButtons = document.querySelectorAll(".btn");
const resultTotal = document.getElementById("total-result");
const resultTip = document.getElementById("tip-result");

class Splitter {
	percent = 10;
	bill = 0;
	peopleAmount = 0;

	buttonClickHandler(event) {
		this.percent = parseInt(event.target.id);
		this.calculate();
	}

	calculate() {
		if (this.bill === 0 || this.peopleAmount === 0 || this.percent === 0) {
			return;
		}
		const tipResult = this.bill / this.peopleAmount / this.percent;
		const totalResult = this.bill / this.peopleAmount + tipResult;
		resultTotal.innerHTML = `$${totalResult.toFixed(2)}`;
		resultTip.innerHTML = `$${tipResult.toFixed(2)}`;
	}

	setTipPercentage(tipInPercent) {
		this.percent = tipInPercent;
		this.calculate();
	}

	setBill(bill) {
		this.bill = bill;
		this.calculate();
	}

	setPeopleAmount(peopleAmount) {
		this.peopleAmount = peopleAmount;
		this.calculate();
	}
}

const splitter = new Splitter();

function toggleClickTipPercentage(event) {
	const percent = parseInt(event.target.innerText.split("%")[0]);
	splitter.setTipPercentage(percent);
}

function toggleBill(event) {
	const bill = parseInt(event.target.value);
	splitter.setBill(bill);
}

function toggleSetPeopleAmount(event) {
	const peopleAmount = parseInt(event.target.value);
	splitter.setPeopleAmount(peopleAmount);
}

billInput.addEventListener("input", toggleBill);
numPplInput.addEventListener("input", toggleSetPeopleAmount);
tipButtons.forEach((btn) => {
	btn.addEventListener("click", toggleClickTipPercentage);
});
