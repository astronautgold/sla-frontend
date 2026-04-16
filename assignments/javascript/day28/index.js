function btn(){
    let input = document.getElementById("text").value
     let out = document.getElementById("para");
    console.log(input)
    if(input === "red"){
 
   out.style.backgroundColor = "red";

    }
    if(input === "yellow"){
 
   out.style.backgroundColor = "yellow";

    }
     if(input === "blue"){
 
   out.style.backgroundColor = "blue";

    }
    document.getElementById("para").innerHTML=input
}

let incre = 0
 
function count(){
    document.getElementById("incre").innerHTML=++incre;
}


function toggle() {
    let mypass = document.getElementById("pass");

    if (mypass.type === "password") {
        mypass.type = "text";   // show password
    } else {
        mypass.type = "password"; // hide password
    }
}