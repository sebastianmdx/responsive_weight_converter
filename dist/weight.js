const TextInput = document.getElementById("Input");
const OutPut_1 = document.getElementById("output-1");
const OutPut_2 = document.getElementById("output-2");
const OutPut_3 = document.getElementById("output-3");
const OutPut_1_title = document.getElementById("output-1-title");
const OutPut_2_title = document.getElementById("output-2-title");
const OutPut_3_title = document.getElementById("output-3-title");

check = () => {
  let unitType = document.getElementsByName("unitTypeRadio");
  let leng = unitType.length;

  for (i = 0; i < leng; i++) {
    if (unitType[i].checked) {
      if (unitType[i].value === "pounds") {
        pounds();
      } else if (unitType[i].value === "kilograms") {
        kilograms();
      } else if (unitType[i].value === "ounces") {
        Ounces();
      }
    }
  }
};

resetValues = () => {
  TextInput.value = "";
  OutPut_1.innerHTML = "";
  OutPut_2.innerHTML = "";
  OutPut_3.innerHTML = "";
};

pounds = () => {
  resetValues();
  TextInput.placeholder = "Pounds";
  OutPut_1_title.innerText = "Stones: ";
  OutPut_2_title.innerText = "Kilograms: ";
  OutPut_3_title.innerText = "Ounces: ";
  TextInput.addEventListener("input", function (e) {
    let lbs = e.target.value;
    OutPut_1.innerHTML = (lbs / 14).toFixed(2) + " st";
    OutPut_2.innerHTML = (lbs / 2.2046).toFixed(2) + " kg";
    OutPut_3.innerHTML = (lbs * 16).toFixed(2) + " oz";
  });
};

kilograms = () => {
  resetValues();
  TextInput.placeholder = "Kilograms";
  OutPut_1_title.innerText = "Stones: ";
  OutPut_2_title.innerText = "Pounds: ";
  OutPut_3_title.innerText = "Ounces: ";
  TextInput.addEventListener("input", function (e) {
    let kg = e.target.value;
    OutPut_1.innerHTML = (kg * 0.15747).toFixed(2) + " st";
    OutPut_2.innerHTML = (kg * 2.20462).toFixed(2) + " lbs";
    OutPut_3.innerHTML = (kg * 35.274).toFixed(2) + " oz";
  });
};

Ounces = () => {
  resetValues();
  TextInput.placeholder = "Ounces";
  OutPut_1_title.innerText = "Stones: ";
  OutPut_2_title.innerText = "Pounds: ";
  OutPut_3_title.innerText = "Kilograms: ";
  TextInput.addEventListener("input", function (e) {
    let oz = e.target.value;
    OutPut_1.innerHTML = (oz * 0.00446428571).toFixed(2) + " st";
    OutPut_3.innerHTML = (oz * 0.0625).toFixed(2) + " lbs";
    OutPut_2.innerHTML = (oz * 0.0283495).toFixed(2) + " kg";
  });
};

// 1st
// kg * 0.15747

// lb ÷ 14 = stones

// 1st = oz * 224
// 1 0z = st * 0.00446428571st
