var addButton =document.querySelector("#add")
check = 0;

addButton.addEventListener("click" ,function(){
    if (check ==0) {
        addButton.innerHTML = "add"
        // addButton.style.color = ""
        check = 1;
    } else {
        addButton.innerHTML = "Remove"
        // addButton.Style.color = "red"
        check = 0;
    }
   
})

var con = document.querySelector("i")
var con = document.querySelector("image")

con.addEventListener("dblclick",function(){
   image.style.transform = 'transform: translate(-50%,-50%) scale(0);'
})