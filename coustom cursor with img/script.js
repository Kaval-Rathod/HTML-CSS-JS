var elem = document.querySelectorAll(".elem")

elem.forEach(function(val) {
    // if you havae to find any child node 
    // console.log(val.childNodes[1]);

    val.addEventListener("mouseenter",function(){
        val.childNodes[1].style.opacity = 1
        // console.log("hello");
        // val.style.backgroundColor = "red"
    });
    val.addEventListener("mouseleave",function(){
        val.childNodes[1].style.opacity = 0
        // console.log("hel");
        // val.style.backgroundColor = "transparent"
    });
    val.addEventListener("mousemove",function(dets){
        val.childNodes[1].style.left = dets.x+"px"
        // val.childNodes[1].style.top = dets.y+"px"
        // console.log("hel");
        // val.style.backgroundColor = "transparent"
    });
    // console.log(val);
})
// var elem1 = document.querySelector("#elem1")
// var elemImg = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove",function(dets){
//     // console.log(dets);
//     elemImg.style.left = dets.x+"px"
//     elemImg.style.top = dets.y+"px"
// })

// elem1.addEventListener("mousemove",function(dets){
//     // console.log(dets);
//     elemImg.style.opacity = 1
// })

// elem1.addEventListener("mouseleave",function(dets){
//     // console.log(dets);
//     elemImg.style.opacity = 0
// })
