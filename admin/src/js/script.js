var popupForm = document.getElementById("popup-form");
var openFormBtn = document.getElementById("open-form-btn");
var closeFormBtn = document.getElementById("close-form-btn");
openFormBtn.onclick = function () {
  popupForm.style.display = "block";
};
closeFormBtn.onclick = function () {
  popupForm.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == popupForm) {
    popupForm.style.display = "none";
  }
};

// add new complaint form script

var addComplaintForm = document.getElementById("add-complaint-form");
var openAddComplaintFormBtn = document.getElementById("open-add-complaint-form-btn");
var closeAddComplaintFormBtn = document.getElementById("close-add-complaint-form-btn");
openAddComplaintFormBtn.onclick = function () {
  addComplaintForm.style.display = "block";
};
closeAddComplaintFormBtn.onclick = function () {
  addComplaintForm.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == addComplaintForm) {
    addComplaintForm.style.display = "none";
  }
};