
function changeText(){
    document.getElementById("demo").innerHTML = "Yeheyyyyy"
}

function Alert() {
    alert("Bakit?");
    alert("Ginawa nga kita ng HTML oh");
}

var b = document.querySelector("#movingbutton");
b.addEventListener("click" , clicked );

function clicked() {

    var i = Math.floor(Math.random()* 500)+ 1 ;
    var j = Math.floor(Math.random()* 500)+ 1 ;

    b.style.left = i + 'px';
    b.style.top = j + 'px';
}

