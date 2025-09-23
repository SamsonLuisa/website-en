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





/*
function openNav() {
  document.getElementById("mySidebar").style.width = "250px"; 
  document.getElementById("main").style.marginLeft = "250px";

  
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
*/



/*

function toggleNav() {
  const sidebar = document.getElementById("meniu");
  const main = document.getElementById("continut");

  if (sidebar.style.width === "250px") {
    // Sidebar e deschis → îl închidem
    sidebar.style.width = "0";
    main.style.marginLeft = "0";
  } else {
    // Sidebar e închis → îl deschidem
    sidebar.style.width = "25%";
    main.style.marginLeft = "250px";
  }
}
*/