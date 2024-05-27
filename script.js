const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";
// const dropdown = document.querySelectorAll(".dropdown select");
const dropdown = document.querySelectorAll(".dropdown select");
const result = document.getElementById("result");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");

for (let select of dropdown) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        }
        else if (select.name === "to" && currCode === "INR") {
            newOption.selected = 'selected';
        }
        select.append(newOption);
    }
    select.addEventListener('change', (evt) => {
        updateFlag(evt.target);
    })


}
const updateFlag = (element) => {
    let currCode = element.value;
    let countrycode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countrycode}/shiny/64.png`;
    let img = element.parentElement.querySelector('img');
    img.src = newSrc;
};
result.addEventListener('click', (evt) => {
    let amount = document.querySelector(".amount input");
    let amountval = amount.value;
    evt.preventDefault();
    if (amountval === "" || amountval < 1) {
        amountval = 1;
        amount.value = '1';
    }
    let firstcount = fromcurr.value.toLowerCase();
    let secondcount = tocurr.value.toLowerCase();
    console.log(firstcount, secondcount);
})