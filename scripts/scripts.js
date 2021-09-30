const billInput = document.querySelector(".bill-input");
const numPplInput = document.querySelector(".num-ppl-input");
const tipButtons = document.querySelectorAll(".btn");
const resultTotal = document.getElementById("total-result");
const resultTip = document.getElementById("tip-result");
const DEFAULT_TIP = 10;

class Splitter {
    constructor(bill, numPpl, percent) {
        this.bill = bill;
        this.numPpl = numPpl;
        this.percent = percent;
        this.result = 0;
    }

    calculate(billValue, numPplValue, percent) {
        percent = this.percent || DEFAULT_TIP;
        billValue = this.bill.value || 0;
        numPplValue = this.numPpl.value || 0;
        let tipResult =
            billValue / numPplValue / this.buttonClickHandler(percent);
        console.log(this.buttonClickHandler);
        let totalResult = billValue / numPplValue + tipResult;
        if (numPplValue === 0) {
            resultTip.innerHTML = `$${billValue / percent}`;
            resultTotal.innerHTML = 0;
        } else {
            resultTotal.innerHTML = `$${totalResult.toFixed(2)}`;
            resultTip.innerHTML = `$${tipResult.toFixed(2)}`;
        }
    }

    buttonClickHandler(percent) {
        this.percent = percent;
        percent = parseInt(this.id);

        console.log(percent);

        return percent;
    }

    // reset() {
    //     this.currentBill = 0;
    //     this.numPpl = 0;
    //     this.selectedTip = undefined;
    // }
}

const splitter = new Splitter(billInput, numPplInput);

billInput.addEventListener("input", splitter.calculate.bind(splitter));
numPplInput.addEventListener("input", splitter.calculate.bind(splitter));
tipButtons.forEach((btn) => {
    btn.addEventListener("click", splitter.buttonClickHandler);
});
