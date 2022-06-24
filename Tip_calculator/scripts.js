/* const bill = document.querySelector(".bill");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const amount = document.querySelector(".amount");
const button = document.querySelector(".button");

button.addEventListener("click", () => {

  
  const newBILL = bill.value;
  const newTIP = tip.value;
  const amt = calc_tip(newBILL, newTIP);
  const tot = calc_tot(newBILL, newTIP);

  total.textContent = tot;
  amount.textContent = amt;
});

function calc_tip(bill, tip) {
  var amt = bill * tip * 0.01;
  return amt;
}

function calc_tot(bill, tip) {
  var amt = calc_tip(bill, tip);
  var tot = amt + bill;

  return tot;
}
*/

const bill_name = document.querySelector(".bill");
const tip_name = document.querySelector(".tip");
const total_name = document.querySelector(".total");
const amount_name = document.querySelector(".amount");
const button_name = document.querySelector(".button");

button_name.addEventListener("click", () => {
  const newBILL = bill_name.value;
  const newTIP = tip_name.value;
  const amt = calc_tip(newBILL, newTIP);
  const tot = calc_tot(newBILL, newTIP);

  total_name.value = tot;
  amount_name.value = amt;

  bill_name.addEventListener("click", () => {
    total_name.value = " ";
    amount_name.value = " ";
  });

  tip_name.addEventListener("click", () => {
    total_name.value = " ";
    amount_name.value = " ";
  });
});

function calc_tip(bill, tip) {
  var amt = bill * tip * 0.01;
  return amt;
}

function calc_tot(bill, tip) {
  var amt = calc_tip(bill, tip);
  var tot = Number(amt) + Number(bill);

  return tot;
}
