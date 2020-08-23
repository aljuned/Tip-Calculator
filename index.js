let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let bilAmount = document.getElementById("bill_amount").value;
    let tipPeecantage = document.getElementById("tip_percentage").value;

    let tipAmount = document.getElementById("tip_amount").value = bilAmount / tipPeecantage;
    document.getElementById("total_amount").value = parseFloat(bilAmount) + parseFloat(tipAmount);
})