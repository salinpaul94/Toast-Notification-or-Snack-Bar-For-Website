let toastBox = document.getElementById("toastBox");

function showToast(message){
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = message;
  toastBox.appendChild(toast);
}