var elForm = document.querySelector(".js-car-form");
var elInput = elForm.querySelector(".js-car-input");
var elBtnPre = elForm.querySelector(".js-btn-pre");
var elBtnNext = elForm.querySelector(".js-btn-next");
var elList = document.querySelector(".js-car-list");
var arrCars = [" Cobalt ", " Malibu ", " Gentra "];

function updateList() {
  elList.innerHTML = "";
  arrCars.forEach(function (car) {
    var child = document.createElement("li");
    child.textContent = car;
    elList.appendChild(child);
  });
}

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

elBtnPre.addEventListener("click", function () {
  var inputValue = elInput.value.trim();
  if (inputValue !== "") {
    elInput.value = "";
    arrCars.unshift(inputValue);
    updateList();
  }
});

elBtnNext.addEventListener("click", function () {
  var inputValue = elInput.value.trim();
  if (inputValue !== "") {
    elInput.value = "";
    arrCars.push(inputValue);
    updateList();
  }
});

updateList();
