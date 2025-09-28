function toggleNav() {
  const sidebar = document.getElementById("mySidebar");
  sidebar.classList.toggle("active"); // adaugă sau scoate clasa "active"
}

function openNavMobile() {
  document.getElementById("mySidebar").style.width = "100%";
}


function closeNavMobile() {
   document.getElementById("mySidebar").style.width = "0%";

}




