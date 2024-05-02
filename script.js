let appear = document.querySelector(".plus_B1");
appear.addEventListener("click", shown1);
function shown1(){
    let answer1 = document.querySelector(".answ_1");
    answer1.style.display = "block";
}

let close = document.querySelector(".plus_B1");
close.addEventListener("dblclick", cover1);
function cover1(){
    let answer1 = document.querySelector(".answ_1");
    answer1.style.display = "none";
}

let appear2 = document.querySelector(".plus_B2");
appear2.addEventListener("click", shown2);
function shown2(){
    let answer2 = document.querySelector(".answ_2");
    answer2.style.display = "block";
}

let close2 = document.querySelector(".plus_B2");
close2.addEventListener("dblclick", cover2);
function cover2(){
    let answer2 = document.querySelector(".answ_2");
    answer2.style.display = "none";
}
let appear3 = document.querySelector(".plus_B3");
appear3.addEventListener("click", shown3);
function shown3(){
    let answer3 = document.querySelector(".answ_3");
    answer3.style.display = "block";
}

let close3 = document.querySelector(".plus_B3");
close3.addEventListener("dblclick", cover3);
function cover3(){
    let answer3 = document.querySelector(".answ_3");
    answer3.style.display = "none";
}
let appear4 = document.querySelector(".plus_B4");
appear4.addEventListener("click", shown4);
function shown4(){
    let answer4 = document.querySelector(".answ_4");
    answer4.style.display = "block";
}

let close4 = document.querySelector(".plus_B4");
close4.addEventListener("dblclick", cover4);
function cover4(){
    let answer4 = document.querySelector(".answ_4");
    answer4.style.display = "none";
}
let appear5 = document.querySelector(".plus_B5");
appear5.addEventListener("click", shown5);
function shown5(){
    let answer5 = document.querySelector(".answ_5");
    answer5.style.display = "block";
}

let close5 = document.querySelector(".plus_B5");
close5.addEventListener("dblclick", cover5);
function cover5(){
    let answer5 = document.querySelector(".answ_5");
    answer5.style.display = "none";
}

document.querySelector(".plus_B1").addEventListener("click", rotation);
function rotation(){
    this.classList.toggle("rotated")
}
document.querySelector(".plus_B2").addEventListener("click", rotation);
function rotation(){
    this.classList.toggle("rotated")
}
document.querySelector(".plus_B3").addEventListener("click", rotation);
function rotation(){
    this.classList.toggle("rotated")
}
document.querySelector(".plus_B4").addEventListener("click", rotation);
function rotation(){
    this.classList.toggle("rotated")
}
document.querySelector(".plus_B5").addEventListener("click", rotation);
function rotation(){
    this.classList.toggle("rotated")
}

// let burger = document.querySelector(".bar");
// burger.addEventListener("click")
let burger = document.querySelector(".bar");
burger.addEventListener("click", open);
function open(){
    let opened = document.querySelector(".links");
    opened.style.display = "block";
    document.querySelector(".bar").style.opacity = "0"
    // opened.style.opacity = "0"
}
let daxurva = document.querySelector(".escape");
daxurva.addEventListener("click", close1);
function close1(){
    let closed = document.querySelector(".links");
    closed.style.display = "none";
    document.querySelector(".bar").style.opacity = "1";
}