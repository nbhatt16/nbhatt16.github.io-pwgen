function generate(){

    var complexity = document.getElementById("number").value;

    var values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    var password = "";

    for(var i = 1; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    document.getElementById("display").value = password;

    document.getElementById("lastPass").innerHTML += password + "<br >";

}

document.getElementById("number").oninput = function(){

    if(document.getElementById("number").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("number").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }

}
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied!");

}