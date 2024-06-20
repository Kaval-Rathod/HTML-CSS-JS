var arr = [{
    dp: "https://images.unsplash.com/photo-1521714161819-15534968fc5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHN0b3J5fGVufDB8fDB8fHww", story: "https://plus.unsplash.com/premium_photo-1680902988871-70d583ca1e95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D"
}, {
    dp: "https://images.unsplash.com/photo-1626236104436-1e5aa5dd6792?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3Rvcnl8ZW58MHx8MHx8fDA%3D", story: "https://images.unsplash.com/photo-1702094079674-1bf0725624dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D"
}, {
    dp: "https://plus.unsplash.com/premium_photo-1670590820817-6c3ff6ffd1b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1700676961688-dec6296de985?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D"
},
{
    dp: "https://images.unsplash.com/photo-1683009426952-13567b4fa28b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1682687220305-ce8a9ab237b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D"
},
{
    dp: "https://plus.unsplash.com/premium_photo-1701151540988-5a8486eec099?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Nnx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1701839339832-158736f88c0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDJ8fHxlbnwwfHx8fHw%3D"
},
{
    dp: "https://images.unsplash.com/photo-1702017634883-8392c239ea2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTh8fHxlbnwwfHx8fHw%3D", story: "https://images.unsplash.com/photo-1701725313832-d8f7fadb3006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjB8fHxlbnwwfHx8fHw%3D"
},
{
    dp: "https://plus.unsplash.com/premium_photo-1701210619726-c8b0fbe29bbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjR8fHxlbnwwfHx8fHw%3D", story: "https://images.unsplash.com/photo-1682687219612-b12805df750d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMjd8fHxlbnwwfHx8fHw%3D"
},
]
var stories = document.querySelector("#stories")
var clutter = ""

arr.forEach(function (elem,idx) {
    console.log(elem);
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
    </div>`
})

// console.log(clutter);

stories.innerHTML=clutter;

stories.addEventListener("click",function(dets){
    document.querySelector("#fullcreen").style.display="block"
    document.querySelector("#fullcreen").style.backgroundImage=`url(${arr[dets.target.id].story})`
    // console.log(arr[dets.target.id].story);

    setTimeout(function(){
        document.querySelector("#fullcreen").style.display="none"
    },3000)
});