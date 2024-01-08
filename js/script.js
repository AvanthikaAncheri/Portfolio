// TYPING ANIMATION

var typed  = new Typed(".typing",{
    strings:["","Web Designer","MERN Stack Developer","Content Writer","Front-end Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

const nav = document.querySelector(".nav"),
     navList = nav.querySelector("li"),
     totalnavList = navList.length;
     for(let i=0; i<totalnavList; i++){
        const a=navList[i].querySelector("a");
        console.log(a)
        a.addEventListener("click",function(){
            this.classList.add("active")
        })
     }