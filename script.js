function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    n = document.getElementById("years").value;

    yearint = new Date().getFullYear()


    document.getElementById("principaltext").innerHTML = p;
    document.getElementById("interesttext").innerHTML = r;
    document.getElementById("simpleinteresttext").innerHTML = (p*(r/100)*n);
    document.getElementById("yeartext").innerHTML = parseInt(yearint) + parseInt(n) + (-1);

    if(document.getElementById("principal").value <=0){
        alert("Please enter a positive number");
    }
    
}

function myFunction() {
    var number  = document.getElementById("principal").value;
    document.getElementById("myText").innerHTML = number;
}


function show_value(x)
{
 document.getElementById("slider_value").innerHTML=x;
}