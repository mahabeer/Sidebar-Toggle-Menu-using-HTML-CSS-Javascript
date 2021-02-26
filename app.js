let toggle_bar = document.querySelector(".nav-header");

let sidebar = document.querySelector(".sidebar");

toggle_bar.addEventListener("click", function(){
    if(toggle_bar.firstElementChild.classList.contains("fa-bars"))
    {
        toggle_bar.firstElementChild.classList.replace("fa-bars","fa-times");
    }
    else
    {
        toggle_bar.firstElementChild.classList.replace("fa-times","fa-bars");
    }
   sidebar.classList.toggle("sidebaractive")
})
