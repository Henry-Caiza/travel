const html = document.querySelector("html")
const btn =  document.querySelector("#btn");
const btnMobile =  document.querySelector("#btn-mob");

btn.addEventListener("click", toggleDark);
btnMobile.addEventListener("click", toggleDark);
function toggleDark(){
    const isDarkMode = html.classList.contains('dark');
    
    if(!isDarkMode){
        html.classList.toggle('dark');
    } else{
        html.classList.remove('dark');
    }
}