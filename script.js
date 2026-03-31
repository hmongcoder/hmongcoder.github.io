let profile = document.getElementById("profile");
let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-img");
let closeBtn = document.getElementById("close");

profile.onclick = function(){
  modal.style.display = "flex";
  modalImg.src = this.src;
}

closeBtn.onclick = function(){
  modal.style.display ="none";
}